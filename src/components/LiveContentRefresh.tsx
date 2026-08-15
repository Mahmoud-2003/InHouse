'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const POLL_MS = 15000;

/**
 * Keeps an open page in sync with admin edits.
 *
 * Polls a tiny version endpoint and, when the fingerprint changes, calls
 * router.refresh() - a soft re-render of the server components that swaps in
 * the new content without a full page reload, so scroll position and client
 * state survive.
 *
 * Polling rather than a socket: Vercel's serverless functions can't hold long
 * lived connections, and a push setup would need an external pub/sub service
 * to reach every instance. Polling needs nothing extra and cannot get stuck.
 */
export default function LiveContentRefresh({ initialVersion }: { initialVersion: string }) {
  const router = useRouter();
  const knownVersion = useRef(initialVersion);

  useEffect(() => {
    let stopped = false;

    async function check() {
      // Background tabs don't need updates, and skipping them keeps the
      // request count down when many people leave the site open.
      if (stopped || document.visibilityState !== 'visible') return;

      try {
        const res = await fetch('/api/content-version', { cache: 'no-store' });
        if (!res.ok) return;

        const { v } = (await res.json()) as { v: string | null };
        if (!v || stopped || v === knownVersion.current) return;

        knownVersion.current = v;
        router.refresh();
      } catch {
        // Offline or a blip: keep showing what's already on screen and try
        // again on the next tick.
      }
    }

    const timer = setInterval(check, POLL_MS);
    // Catch up immediately when someone returns to the tab.
    document.addEventListener('visibilitychange', check);

    return () => {
      stopped = true;
      clearInterval(timer);
      document.removeEventListener('visibilitychange', check);
    };
  }, [router]);

  return null;
}
