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
  title: {
    default: 'InHouse League & Valorant',
    template: '%s — InHouse League & Valorant',
  },
  description:
    'InHouse League & Valorant is a competitive Discord community running organized InHouse matches and queues for League of Legends and Valorant players.',
  alternates: {
    canonical: './',
  },
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
    icon: [
      { url: '/imgs/icon.svg', type: 'image/svg+xml' },
      { url: '/imgs/icon-48.png', type: 'image/png', sizes: '48x48' },
      { url: '/imgs/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/imgs/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/imgs/icon-192.png',
    apple: '/imgs/icon-192.png',
  },
  openGraph: {
    url: './',
    siteName: 'InHouse League & Valorant',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'j_tu50qJPo5gb2dfMrDnnuqYZ_QZU7Cu_mZGxPvhIKA',
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
