import type { Metadata } from 'next';
import { Rajdhani, Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SITE_URL } from '@/lib/site';
import './globals.css';

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-rajdhani',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'InHouse League & Valorant',
  description:
    'InHouse League & Valorant is a competitive Discord community running organized InHouse matches and queues for League of Legends and Valorant players.',
  keywords: [
    'Discord',
    'InHouse',
    'League of Legends',
    'Valorant',
    'Gaming',
    'Community',
    'Queue',
    'Matchmaking',
    'Tournaments',
  ],
  authors: [{ name: 'InHouse League & Valorant' }],
  icons: {
    icon: '/imgs/icon.svg',
  },
  openGraph: {
    title: 'InHouse League & Valorant',
    description:
      'InHouse League & Valorant is a competitive Discord community running organized InHouse matches and queues for League of Legends and Valorant players.',
    url: SITE_URL,
    siteName: 'InHouse League & Valorant',
    images: ['/imgs/og-image.png'],
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'zxE5VxSrBz2-UemP7HMXpCvhcg6SSSr2QYoOs0i6LPc',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
