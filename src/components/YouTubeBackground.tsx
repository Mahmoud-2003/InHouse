import { useEffect, useState } from 'react';

interface YouTubeBackgroundProps {
  videoId: string;
}

export default function YouTubeBackground({ videoId }: YouTubeBackgroundProps) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  if (reducedMotion) return null;

  const src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&disablekb=1&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1`;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <iframe
        src={src}
        title=""
        tabIndex={-1}
        className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2"
        style={{ border: 0 }}
        allow="autoplay; encrypted-media"
        loading="lazy"
      />
    </div>
  );
}
