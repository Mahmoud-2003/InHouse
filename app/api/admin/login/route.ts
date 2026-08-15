import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import {
  checkRateLimit,
  clearRateLimit,
  createSessionToken,
  isValidPathKey,
  sessionCookie,
  verifyCredentials,
} from '@/lib/auth';

const NO_INDEX = { 'X-Robots-Tag': 'noindex, nofollow' };

/** Identical response for every failure mode so nothing is leaked. */
function invalid() {
  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401, headers: NO_INDEX });
}

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many attempts. Try again later.' },
      { status: 429, headers: NO_INDEX },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return invalid();
  }

  const { key, username, password } = (body ?? {}) as Record<string, unknown>;
  if (typeof key !== 'string' || typeof username !== 'string' || typeof password !== 'string') {
    return invalid();
  }

  // The endpoint is unusable without the secret path key.
  if (!isValidPathKey(key) || !verifyCredentials(username, password)) {
    return invalid();
  }

  clearRateLimit(ip);
  (await cookies()).set(sessionCookie.name, createSessionToken(), sessionCookie.options);

  return NextResponse.json({ ok: true }, { headers: NO_INDEX });
}
