import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { sessionCookie, verifySessionToken } from '@/lib/auth';
import { getContentFile, putContentFile } from '@/lib/github';
import type { LocalizedText, Partner, SiteContent, Tournament } from '@/lib/content-types';

const NO_INDEX = { 'X-Robots-Tag': 'noindex, nofollow', 'Cache-Control': 'no-store' };

async function authorized(): Promise<boolean> {
  const token = (await cookies()).get(sessionCookie.name)?.value;
  return verifySessionToken(token);
}

function unauthorized() {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers: NO_INDEX });
}

function isLocalized(value: unknown): value is LocalizedText {
  if (typeof value !== 'object' || value === null) return false;
  const v = value as Record<string, unknown>;
  return typeof v.en === 'string' && (v.ar === undefined || typeof v.ar === 'string');
}

function isLocalizedArray(value: unknown): value is LocalizedText[] {
  return Array.isArray(value) && value.every(isLocalized);
}

function isTournament(value: unknown): value is Tournament {
  if (typeof value !== 'object' || value === null) return false;
  const t = value as Record<string, unknown>;
  return (
    typeof t.id === 'string' &&
    typeof t.visible === 'boolean' &&
    typeof t.order === 'number' &&
    isLocalized(t.name) &&
    isLocalized(t.subtitle) &&
    isLocalized(t.description) &&
    isLocalized(t.meta) &&
    typeof t.bannerUrl === 'string' &&
    typeof t.battlefyUrl === 'string' &&
    isLocalizedArray(t.format) &&
    isLocalizedArray(t.rules) &&
    isLocalizedArray(t.prizes)
  );
}

function isPartner(value: unknown): value is Partner {
  if (typeof value !== 'object' || value === null) return false;
  const p = value as Record<string, unknown>;
  return (
    typeof p.id === 'string' &&
    typeof p.visible === 'boolean' &&
    typeof p.order === 'number' &&
    isLocalized(p.name) &&
    isLocalized(p.tagline) &&
    isLocalized(p.description) &&
    isLocalizedArray(p.features) &&
    isLocalizedArray(p.stats) &&
    typeof p.logoUrl === 'string' &&
    typeof p.websiteUrl === 'string' &&
    typeof p.discordUrl === 'string'
  );
}

function isSiteContent(value: unknown): value is SiteContent {
  if (typeof value !== 'object' || value === null) return false;
  const c = value as Record<string, unknown>;
  return (
    c.version === 1 &&
    Array.isArray(c.tournaments) &&
    c.tournaments.every(isTournament) &&
    Array.isArray(c.partners) &&
    c.partners.every(isPartner)
  );
}

export async function GET() {
  if (!(await authorized())) return unauthorized();

  try {
    const { content, sha } = await getContentFile();
    return NextResponse.json({ content, sha }, { headers: NO_INDEX });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to load content';
    return NextResponse.json({ error: message }, { status: 502, headers: NO_INDEX });
  }
}

export async function PUT(request: Request) {
  if (!(await authorized())) return unauthorized();

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Malformed request' }, { status: 400, headers: NO_INDEX });
  }

  const { content, sha } = (body ?? {}) as Record<string, unknown>;
  if (typeof sha !== 'string' || !isSiteContent(content)) {
    return NextResponse.json({ error: 'Invalid content payload' }, { status: 400, headers: NO_INDEX });
  }

  try {
    const result = await putContentFile(content, sha, 'Update site content via admin panel');

    if (!result.ok && result.conflict) {
      return NextResponse.json(
        { error: 'Content changed elsewhere. Reload before saving again.' },
        { status: 409, headers: NO_INDEX },
      );
    }
    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: 502, headers: NO_INDEX });
    }

    return NextResponse.json({ ok: true, sha: result.sha }, { headers: NO_INDEX });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to save content';
    return NextResponse.json({ error: message }, { status: 502, headers: NO_INDEX });
  }
}
