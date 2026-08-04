import type { Metadata } from 'next';
import { Swords, Award, TrendingUp } from 'lucide-react';
import { Reveal, RevealGroup, RevealItem } from '@/components/Reveal';
import GlowButton from '@/components/GlowButton';
import YouTubeBackground from '@/components/YouTubeBackground';

export const metadata: Metadata = {
  title: 'League of Legends InHouse',
  description:
    'Our League of Legends InHouse system provides a structured competitive environment where players can test their skills in organized 5v5 matches on Summoner\'s Rift.',
};

export default function LoLPage() {
  return (
    <div className="min-h-screen bg-void">
      <section className="relative h-[70vh] min-h-[520px] flex items-center justify-center overflow-hidden mb-20">
        <div className="absolute inset-0 bg-[url('https://img.lightshot.app/JCbdDY2-RQKEkax13zcHiQ.png')] bg-cover bg-center opacity-[0.32]" />
        <YouTubeBackground videoId="aR-KAldshAE" />
        <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-void/75 to-void" />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/30 to-void" />
        <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-lolblue/15 blur-3xl" aria-hidden />
        <div className="absolute -bottom-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-lolblue/10 blur-3xl" aria-hidden />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lolblue/50 to-transparent" />

        <Reveal className="relative z-10 container mx-auto px-4 text-center">
          <p className="eyebrow justify-center mb-4 !text-lolblue">
            <span className="w-1.5 h-1.5 rounded-full bg-lolblue animate-blink inline-block" /> Summoner&apos;s Rift
          </p>
          <h1 className="font-display text-6xl sm:text-7xl font-bold text-ink mb-4 uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
            League of Legends
          </h1>
          <p className="text-xl text-blue-200/80 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            Competitive 5v5 on Summoner&apos;s Rift
          </p>
        </Reveal>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <Reveal className="mb-16">
          <h2 className="font-display text-4xl font-bold text-ink mb-6 text-center uppercase">InHouse System Overview</h2>
          <p className="text-lg text-mute text-center max-w-4xl mx-auto leading-relaxed mb-12">
            Our League of Legends InHouse system provides a structured competitive environment where players can test their skills in organized 5v5 matches on Summoner&apos;s Rift. Every game matters, and every play counts toward your progression.
          </p>

          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.12}>
            {[
              { icon: Swords, title: 'Balanced Drafts', desc: 'Teams are carefully balanced based on player ranks and roles to ensure competitive and fair matches every time.' },
              { icon: Award, title: 'Point System', desc: 'Earn points for wins, outstanding performance, and consistent participation. Top performers get special recognition.' },
              { icon: TrendingUp, title: 'Rank Progression', desc: 'Climb through tiers by winning games and maintaining high performance. Reach Tier 1 for elite competition.' },
            ].map(({ icon: Icon, title, desc }) => (
              <RevealItem key={title}>
                <div className="clip-card bg-panel p-6 border border-line hover:border-lolblue/60 transition-colors h-full">
                  <div className="w-14 h-14 bg-lolblue/10 border border-lolblue/30 clip-tag flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-lolblue" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink mb-3 uppercase">{title}</h3>
                  <p className="text-mute leading-relaxed text-sm">{desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>

        <Reveal>
          <div className="hud-corners bg-panel2 border border-lolblue/20 clip-card-lg p-8 mb-16">
            <p className="eyebrow justify-center mb-3 !text-lolblue">Match Pipeline</p>
            <h2 className="font-display text-3xl font-bold text-ink mb-8 text-center uppercase">How It Works</h2>

            <RevealGroup className="space-y-5" stagger={0.08}>
              {[
                { n: '01', title: 'Select Your Role', desc: "When joining the queue, specify your primary and secondary roles. We'll match you with complementary teammates." },
                { n: '02', title: 'Wait for Match Creation', desc: "Our moderators will form balanced teams based on ranks and roles. You'll receive a notification when your match is ready." },
                { n: '03', title: 'Join Custom Lobby', desc: 'Enter the custom game lobby with your team. Champions are selected through draft pick mode.' },
                { n: '04', title: 'Play and Compete', desc: 'Give your best effort and play to win. All standard League of Legends rules apply.' },
                { n: '05', title: 'Earn Points and Climb', desc: 'Results are recorded and points are awarded. Check the leaderboard to see your ranking.' },
              ].map((step) => (
                <RevealItem key={step.n}>
                  <div className="flex items-start bg-void/60 p-6 clip-card border border-line">
                    <div className="w-12 h-12 bg-lolblue/15 border border-lolblue/40 clip-tag flex items-center justify-center mr-4 flex-shrink-0 font-mono text-lolblue font-bold">
                      {step.n}
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-ink mb-2 uppercase">{step.title}</h3>
                      <p className="text-mute text-sm">{step.desc}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Reveal>

        <Reveal className="text-center">
          <GlowButton href="https://discord.gg/dCjJ6fFH4g" variant="blue">
            Join Discord and Enter the Queue
          </GlowButton>
        </Reveal>
      </div>
    </div>
  );
}
