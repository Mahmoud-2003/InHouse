import type { Metadata } from 'next';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  title: 'InHouse League & Valorant',
  description:
    'InHouse League & Valorant is a competitive Discord community running organized InHouse matches and queues for League of Legends and Valorant players.',
};

export default function Page() {
  return <HomeContent />;
}
