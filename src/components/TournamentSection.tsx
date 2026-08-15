import { ArrowRight, Trophy, ClipboardList, Gift, Lock } from 'lucide-react';
import { Reveal, RevealGroup, RevealItem } from '@/components/Reveal';
import GlowButton from '@/components/GlowButton';
import type { LocalizedText, Tournament } from '@/lib/content-types';

const bulletGroups = [
  { key: 'format' as const, label: 'Tournament Format', icon: Trophy, accent: 'volt' },
  { key: 'rules' as const, label: 'Rules & Requirements', icon: ClipboardList, accent: 'lolblue' },
  { key: 'prizes' as const, label: 'Prizes', icon: Gift, accent: 'gold' },
];

const accentStyles: Record<string, { badge: string; icon: string; bullet: string }> = {
  volt: { badge: 'bg-volt/10 border-volt/30', icon: 'text-volt', bullet: 'text-volt' },
  lolblue: { badge: 'bg-lolblue/10 border-lolblue/30', icon: 'text-lolblue', bullet: 'text-lolblue' },
  gold: { badge: 'bg-gold/10 border-gold/30', icon: 'text-gold', bullet: 'text-gold' },
};

export default function TournamentSection({ tournament }: { tournament: Tournament }) {
  const closed = tournament.registrationClosed === true;

  return (
    <section className="py-20 relative z-10 bg-void">
      <div className="container mx-auto px-4">
        <Reveal>
          <div
            className={`hud-corners clip-card-lg border bg-panel overflow-hidden ${
              closed ? 'border-line/60' : 'border-line'
            }`}
          >
            {tournament.bannerUrl && (
              <div className="relative w-full aspect-video">
                <img
                  src={tournament.bannerUrl}
                  alt={`${tournament.name.en} tournament banner`}
                  className={`absolute inset-0 w-full h-full object-cover transition-[filter] ${
                    closed ? 'grayscale-[0.55] opacity-70' : ''
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent" />
                {closed && (
                  <div className="absolute top-4 right-4 clip-tag border border-valred/50 bg-void/85 px-3 py-1.5 flex items-center gap-2">
                    <Lock className="w-3 h-3 text-valred" />
                    <span className="font-mono text-[10px] tracking-[0.25em] text-valred uppercase">
                      Registration Closed
                    </span>
                  </div>
                )}
              </div>
            )}

            <div className="p-6 sm:p-10">
              <p className="eyebrow mb-4">
                {closed ? (
                  <span className="w-1.5 h-1.5 rounded-full bg-mute/60 inline-block" />
                ) : (
                  <span className="live-dot" />
                )}{' '}
                Tournament Announcement
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink uppercase mb-2">
                {tournament.name.en}
              </h2>
              {tournament.subtitle.en && (
                <p className="font-display text-lg text-lolblue font-semibold uppercase mb-4">
                  {tournament.subtitle.en}
                </p>
              )}
              {tournament.description.en && (
                <p className="text-mute leading-relaxed mb-10 max-w-3xl">{tournament.description.en}</p>
              )}

              <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10" stagger={0.08}>
                {bulletGroups.map(({ key, label, icon: Icon, accent }) => {
                  const items: LocalizedText[] = tournament[key];
                  if (!items || items.length === 0) return null;
                  const styles = accentStyles[accent];
                  return (
                    <RevealItem key={key}>
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`w-8 h-8 border clip-tag flex items-center justify-center flex-shrink-0 ${styles.badge}`}>
                          <Icon className={`w-4 h-4 ${styles.icon}`} />
                        </div>
                        <h3 className="font-display font-semibold text-ink uppercase text-sm">{label}</h3>
                      </div>
                      <ul className="space-y-1.5 text-mute text-sm pl-10">
                        {items.map((item) => (
                          <li key={item.en} className="flex items-start">
                            <span className={`${styles.bullet} mr-2`}>▸</span>
                            <span>{item.en}</span>
                          </li>
                        ))}
                      </ul>
                    </RevealItem>
                  );
                })}
              </RevealGroup>

              <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-line">
                <div className="flex flex-col gap-2">
                  {closed && (
                    <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-valred uppercase">
                      <Lock className="w-3 h-3" /> Registration Closed
                    </span>
                  )}
                  {tournament.meta.en && (
                    <p className="font-mono text-xs tracking-[0.25em] text-mute/70 uppercase">
                      {tournament.meta.en}
                    </p>
                  )}
                </div>

                {/* Still linked when closed: the bracket and results live there too. */}
                {tournament.battlefyUrl &&
                  (closed ? (
                    <GlowButton href={tournament.battlefyUrl} variant="ghost">
                      View on Battlefy <ArrowRight className="w-4 h-4" />
                    </GlowButton>
                  ) : (
                    <GlowButton href={tournament.battlefyUrl} variant="volt">
                      Register on Battlefy <ArrowRight className="w-4 h-4" />
                    </GlowButton>
                  ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
