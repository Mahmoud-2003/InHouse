import type { Metadata } from 'next';

// noindex lives here rather than in robots.txt: a Disallow line would publish
// the secret path to anyone who fetches /robots.txt. no-referrer stops the
// path leaking through the Referer header on outbound clicks.
export const metadata: Metadata = {
  title: 'Control',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
  referrer: 'no-referrer',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-void text-ink font-sans">{children}</div>;
}
