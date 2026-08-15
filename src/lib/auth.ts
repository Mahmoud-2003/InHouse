import { createHash, createHmac, randomBytes, scryptSync, timingSafeEqual } from 'node:crypto';

const SESSION_COOKIE = 'ih_s';
const SESSION_TTL_MS = 8 * 60 * 60 * 1000;

/**
 * Hash format: scrypt:N:r:p:saltHex:keyHex
 * Colon-delimited, not `$`: dotenv and most env-var UIs perform variable
 * expansion on `$`, which silently mangles the stored hash.
 */
const SCRYPT_KEYLEN = 32;

function sha256(value: string): Buffer {
  return createHash('sha256').update(value, 'utf8').digest();
}

/** Compares two strings in constant time regardless of length. */
function safeEqualStrings(a: string, b: string): boolean {
  return timingSafeEqual(sha256(a), sha256(b));
}

export function hashPassword(plain: string): string {
  const N = 16384;
  const r = 8;
  const p = 1;
  const salt = randomBytes(16);
  const key = scryptSync(plain, salt, SCRYPT_KEYLEN, { N, r, p });
  return `scrypt:${N}:${r}:${p}:${salt.toString('hex')}:${key.toString('hex')}`;
}

function verifyPassword(plain: string, stored: string): boolean {
  const parts = stored.split(':');
  if (parts.length !== 6 || parts[0] !== 'scrypt') return false;

  const N = Number(parts[1]);
  const r = Number(parts[2]);
  const p = Number(parts[3]);
  const salt = Buffer.from(parts[4], 'hex');
  const expected = Buffer.from(parts[5], 'hex');
  if (!Number.isFinite(N) || !Number.isFinite(r) || !Number.isFinite(p)) return false;

  const actual = scryptSync(plain, salt, expected.length, { N, r, p });
  return timingSafeEqual(actual, expected);
}

/**
 * Verifies a username/password pair against the single configured account.
 * Always runs scrypt, even when the username is wrong, so response timing
 * does not reveal whether the username exists.
 */
export function verifyCredentials(username: string, password: string): boolean {
  const expectedUser = process.env.ADMIN_USERNAME;
  const expectedHash = process.env.ADMIN_PASSWORD_HASH;
  if (!expectedUser || !expectedHash) return false;

  const userOk = safeEqualStrings(username, expectedUser);
  let passOk = false;
  try {
    passOk = verifyPassword(password, expectedHash);
  } catch {
    passOk = false;
  }

  return userOk && passOk;
}

function authSecret(): string | undefined {
  return process.env.AUTH_SECRET;
}

function sign(payloadB64: string, secret: string): string {
  return createHmac('sha256', secret).update(payloadB64).digest('base64url');
}

/** Stateless signed session token: base64url(payload).base64url(hmac) */
export function createSessionToken(): string {
  const secret = authSecret();
  if (!secret) throw new Error('AUTH_SECRET is not configured');

  const payload = JSON.stringify({ v: 1, exp: Date.now() + SESSION_TTL_MS });
  const payloadB64 = Buffer.from(payload, 'utf8').toString('base64url');
  return `${payloadB64}.${sign(payloadB64, secret)}`;
}

export function verifySessionToken(token: string | undefined): boolean {
  const secret = authSecret();
  if (!token || !secret) return false;

  const [payloadB64, signature] = token.split('.');
  if (!payloadB64 || !signature) return false;

  const expected = sign(payloadB64, secret);
  if (!safeEqualStrings(signature, expected)) return false;

  try {
    const payload = JSON.parse(Buffer.from(payloadB64, 'base64url').toString('utf8'));
    return typeof payload?.exp === 'number' && payload.exp > Date.now();
  } catch {
    return false;
  }
}

export const sessionCookie = {
  name: SESSION_COOKIE,
  options: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict' as const,
    path: '/',
    maxAge: SESSION_TTL_MS / 1000,
  },
};

/** The admin path segment lives in an env var so it never appears in source. */
export function isValidPathKey(key: string): boolean {
  const expected = process.env.ADMIN_PATH_KEY;
  if (!expected) return false;
  return safeEqualStrings(key, expected);
}

/**
 * Best-effort login throttle. On serverless this Map is per-instance and is
 * lost on cold start, so it slows casual brute force only - the real defense
 * is a long, random password. Use a shared store (KV) if that isn't enough.
 */
const attempts = new Map<string, { count: number; resetAt: number }>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000;

export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = attempts.get(ip);

  if (!entry || entry.resetAt < now) {
    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (entry.count >= MAX_ATTEMPTS) return false;

  entry.count += 1;
  return true;
}

export function clearRateLimit(ip: string): void {
  attempts.delete(ip);
}
