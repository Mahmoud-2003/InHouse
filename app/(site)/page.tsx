import type { Metadata } from 'next';
import HomeContent from './HomeContent';
import { SITE_URL } from '@/lib/site';
import { visibleTournaments } from '@/lib/content';

export const metadata: Metadata = {
  description:
    'InHouse League & Valorant is a competitive Discord community running organized InHouse matches and queues for League of Legends and Valorant players.',
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'InHouse League & Valorant',
  url: SITE_URL,
  logo: `${SITE_URL}/imgs/icon-512.png`,
  description:
    'InHouse League & Valorant is a competitive Discord community running organized InHouse matches and queues for League of Legends and Valorant players.',
  sameAs: ['https://discord.gg/dCjJ6fFH4g'],
};

export default async function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <HomeContent tournaments={await visibleTournaments()} />
    </>
  );
}
