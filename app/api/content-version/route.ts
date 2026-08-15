import { NextResponse } from 'next/server';
import { getContentVersion } from '@/lib/content';

// Must reflect the cache state on every call, so never cache the response
// itself. The underlying content read is still cached and tag-purged.
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    return NextResponse.json(
      { v: await getContentVersion() },
      { headers: { 'Cache-Control': 'no-store' } },
    );
  } catch {
    // Never let a polling error surface as a client error; the page simply
    // keeps whatever it is already showing.
    return NextResponse.json({ v: null }, { headers: { 'Cache-Control': 'no-store' } });
  }
}
