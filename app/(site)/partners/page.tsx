import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';
import { Reveal, RevealGroup, RevealItem } from '@/components/Reveal';
import GlowButton from '@/components/GlowButton';
import poroparkLogo from '@/img/poropark-logo.png';

export const metadata: Metadata = {
  title: 'Server Partners',
  description:
    'Communities we work with to grow competitive League of Legends and Valorant across regions.',
};

const partners = [
  {
    name: 'Poropark',
    logo: poroparkLogo,
    tagline: 'Swedish League of Legends Community',
    description:
      "Poropark builds the infrastructure for Sweden's next generation of competitive League of Legends — running tournaments, leagues, and team management with less administrative friction than the pro circuit.",
    features: [
      'Tournaments & Leagues',
      'Team & Roster Management',
      'Player Rankings & Hall of Fame',
      'Looking-for-Group (LFG) Matching',
    ],
    stats: ['5 Verified Organizations', '18 Teams'],
    website: 'https://poropark.se/org',
    discord: 'https://discord.gg/8Rqrmf5NMV',
  },
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-void">
      <section className="relative h-[70vh] min-h-[520px] flex items-center justify-center overflow-hidden mb-20">
        <div className="absolute inset-0 bg-[url('https://img.lightshot.app/M554D-EUQiil2yZ99SHVMQ.jpg')] bg-cover bg-center opacity-[0.18]" />
        <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-void/75 to-void" />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/30 to-void" />
        <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-volt/10 blur-3xl" aria-hidden />
        <div className="absolute -bottom-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-lolblue/10 blur-3xl" aria-hidden />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-volt to-lolblue" />

        <Reveal className="relative z-10 container mx-auto px-4 text-center">
          <p className="eyebrow justify-center mb-4"><span className="live-dot" /> Verified Partners</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-ink mb-4 uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">Server Partners</h1>
          <p className="text-lg text-mute max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            Communities we work with to grow competitive League of Legends and Valorant across regions.
          </p>
        </Reveal>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <RevealGroup className="space-y-8" stagger={0.12}>
          {partners.map((partner) => (
            <RevealItem key={partner.name}>
              <div className="hud-corners clip-card-lg border border-line bg-panel p-6 sm:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 items-start">
                  <div className="flex flex-col items-center lg:items-start gap-4">
                    <div className="w-32 h-32 clip-card border border-line bg-void overflow-hidden flex-shrink-0">
                      <img src={partner.logo.src} alt={`${partner.name} logo`} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      {partner.stats.map((stat) => (
                        <p key={stat} className="font-mono text-[10px] tracking-[0.2em] text-mute/70 uppercase text-center lg:text-left">
                          {stat}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="eyebrow mb-3">Featured Partner</p>
                    <h2 className="font-display text-3xl font-bold text-ink mb-1 uppercase">{partner.name}</h2>
                    <p className="font-display text-sm text-lolblue font-semibold uppercase mb-4">{partner.tagline}</p>
                    <p className="text-mute leading-relaxed mb-6 max-w-2xl">{partner.description}</p>

                    <p className="font-display font-semibold text-ink uppercase text-sm mb-3">What They Offer</p>
                    <ul className="space-y-1.5 text-mute text-sm mb-8">
                      {partner.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <span className="text-volt mr-2">▸</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap items-center gap-4">
                      <GlowButton href={partner.website} variant="volt">
                        Visit Poropark <ExternalLink className="w-4 h-4" />
                      </GlowButton>
                      <GlowButton href={partner.discord} variant="ghost">
                        <FaDiscord className="w-4 h-4" /> Join Poropark Discord
                      </GlowButton>
                    </div>
                  </div>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </div>
  );
}
