import { Crosshair, Target, Flame, Shield } from 'lucide-react';
import { Reveal, RevealGroup, RevealItem } from '../components/Reveal';
import GlowButton from '../components/GlowButton';
import YouTubeBackground from '../components/YouTubeBackground';

export default function ValorantPage() {
  return (
    <div className="min-h-screen bg-void">
      <section className="relative h-[70vh] min-h-[520px] flex items-center justify-center overflow-hidden mb-20">
        <div className="absolute inset-0 bg-[url('https://img.lightshot.app/W8LNackPQ1WMmCEvOycpcw.jpg')] bg-cover bg-center opacity-[0.32]" />
        <YouTubeBackground videoId="e_E9W2vsRbQ" />
        <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-void/75 to-void" />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/30 to-void" />
        <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-valred/15 blur-3xl" aria-hidden />
        <div className="absolute -bottom-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-valred/10 blur-3xl" aria-hidden />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-valred/50 to-transparent" />

        <Reveal className="relative z-10 container mx-auto px-4 text-center">
          <p className="eyebrow justify-center mb-4 !text-valred">
            <span className="w-1.5 h-1.5 rounded-full bg-valred animate-blink inline-block" /> Tactical Ops
          </p>
          <h1 className="font-display text-6xl sm:text-7xl font-bold text-ink mb-4 uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
            Valorant
          </h1>
          <p className="text-xl text-red-200/80 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            Tactical 5v5 Character-Based Shooter
          </p>
        </Reveal>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <Reveal className="mb-16">
          <h2 className="font-display text-4xl font-bold text-ink mb-6 text-center uppercase">InHouse System Overview</h2>
          <p className="text-lg text-mute text-center max-w-4xl mx-auto leading-relaxed mb-12">
            Experience competitive Valorant matches in our organized InHouse system. Test your tactical skills, agent mastery, and teamwork in balanced 5v5 matches against players of similar skill levels.
          </p>

          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.12}>
            {[
              { icon: Crosshair, title: 'Competitive Gameplay', desc: 'Play on competitive map pool with tournament-standard rules. Every round matters in your journey to the top.' },
              { icon: Target, title: 'Rank-Based Matching', desc: 'Teams are balanced based on your competitive rank ensuring fair and exciting matches every time.' },
              { icon: Flame, title: 'Agent Diversity', desc: 'Showcase your agent pool and adapt your strategies. Team composition and synergy are key to victory.' },
            ].map(({ icon: Icon, title, desc }) => (
              <RevealItem key={title}>
                <div className="clip-card bg-panel p-6 border border-line hover:border-valred/60 transition-colors h-full">
                  <div className="w-14 h-14 bg-valred/10 border border-valred/30 clip-tag flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-valred" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink mb-3 uppercase">{title}</h3>
                  <p className="text-mute leading-relaxed text-sm">{desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>

        <Reveal>
          <div className="hud-corners bg-panel2 border border-valred/20 clip-card-lg p-8 mb-16">
            <p className="eyebrow justify-center mb-3 !text-valred">Match Pipeline</p>
            <h2 className="font-display text-3xl font-bold text-ink mb-8 text-center uppercase">Match Format</h2>

            <RevealGroup className="space-y-5" stagger={0.08}>
              {[
                { n: '01', title: 'Join the Queue', desc: 'Head to the queue channel and click Join Queue with your current Valorant rank. Be ready to verify your rank if needed.' },
                { n: '02', title: 'Team Formation', desc: 'Teams are formed with balanced ranks and roles. Each team will have a mix of duelists, controllers, initiators, and sentinels.' },
                { n: '03', title: 'Map Selection', desc: 'Maps are selected from the competitive pool. Both teams can ban one map each, then the match map is randomly selected.' },
                { n: '04', title: 'Play to Win', desc: 'Standard competitive rules apply. First team to win 13 rounds takes the match. Communication and strategy are essential.' },
                { n: '05', title: 'Post-Match Review', desc: 'Results are recorded and stats are tracked. Review your performance and climb the leaderboard.' },
              ].map((step) => (
                <RevealItem key={step.n}>
                  <div className="flex items-start bg-void/60 p-6 clip-card border border-line">
                    <div className="w-12 h-12 bg-valred/15 border border-valred/40 clip-tag flex items-center justify-center mr-4 flex-shrink-0 font-mono text-valred font-bold">
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

        <Reveal className="mb-16">
          <div className="clip-card-lg bg-panel border border-line p-8">
            <h2 className="font-display text-3xl font-bold text-ink mb-6 text-center uppercase">Ranking System</h2>
            <p className="text-mute text-center mb-8 max-w-3xl mx-auto text-sm">
              Your performance in InHouse matches affects your community ranking. Consistent wins and strong individual performance will elevate your standing.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="clip-card bg-void p-6 border border-line">
                <h3 className="font-display text-xl font-semibold text-ink mb-4 uppercase">Win Impact</h3>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex justify-between items-center"><span className="text-mute">Match Victory</span><span className="text-emerald font-semibold">+30 points</span></div>
                  <div className="flex justify-between items-center"><span className="text-mute">13-0 Victory (Stomp)</span><span className="text-gold font-semibold">+10 bonus</span></div>
                  <div className="flex justify-between items-center"><span className="text-mute">Match Loss</span><span className="text-lolblue font-semibold">+5 points</span></div>
                </div>
              </div>

              <div className="clip-card bg-void p-6 border border-line">
                <h3 className="font-display text-xl font-semibold text-ink mb-4 uppercase">Performance Bonuses</h3>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex justify-between items-center"><span className="text-mute">Match MVP</span><span className="text-gold font-semibold">+15 bonus</span></div>
                  <div className="flex justify-between items-center"><span className="text-mute">Team MVP</span><span className="text-volt font-semibold">+8 bonus</span></div>
                  <div className="flex justify-between items-center"><span className="text-mute">Ace Round</span><span className="text-valred font-semibold">+5 bonus</span></div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mb-16">
          <div className="clip-card bg-valred/5 border border-valred/20 p-8">
            <h2 className="font-display text-2xl font-bold text-ink mb-4 flex items-center uppercase">
              <Shield className="w-7 h-7 mr-3 text-valred" />
              Important Rules
            </h2>
            <ul className="space-y-3 text-mute text-sm">
              {[
                'No smurfing or account sharing - your rank must be verified',
                'Respectful communication only - toxicity results in immediate suspension',
                'No cheating, exploits, or unauthorized software',
                'Must be available for the full match duration (30-60 minutes)',
                'Follow all Discord server rules and community guidelines',
              ].map((rule) => (
                <li key={rule} className="flex items-start"><span className="text-valred mr-2 font-bold">•</span><span>{rule}</span></li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="text-center">
          <GlowButton href="https://discord.gg/dCjJ6fFH4g" variant="red">
            Join Discord and Start Playing
          </GlowButton>
        </Reveal>
      </div>
    </div>
  );
}
