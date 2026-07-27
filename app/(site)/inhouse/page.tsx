import type { Metadata } from 'next';
import { Ticket, Users, Trophy, Clock, Shield, Swords, Crosshair, AlertTriangle } from 'lucide-react';
import { Reveal, RevealGroup, RevealItem } from '@/components/Reveal';
import GlowButton from '@/components/GlowButton';
import YouTubeBackground from '@/components/YouTubeBackground';
import ticketImg from '@/img/ticket.png';

export const metadata: Metadata = {
  title: 'What is InHouse? — InHouse League & Valorant',
  description:
    'InHouse is a competitive gaming system where players participate in organized 5v5 matches within our community. Experience fair, balanced games with players of similar skill levels.',
};

const ticketCategories = [
  { title: 'Contact Admin', tag: 'Contact-Admin', icon: Shield, desc: 'Reach a server admin directly for account, access, or moderation issues.' },
  { title: 'About InHouse LoL', tag: 'About-InHouse-LOL', icon: Swords, desc: 'Questions about League of Legends InHouse matches, roles, or the queue.' },
  { title: 'For Problem', tag: 'For-Problem', icon: AlertTriangle, desc: 'Report a bug, a rule violation, or anything that went wrong.' },
  { title: 'About InHouse Valorant', tag: 'About-InHouse-Valorant', icon: Crosshair, desc: 'Questions about Valorant InHouse matches, agents, or the queue.' },
];

export default function InHousePage() {
  return (
    <div className="min-h-screen bg-void">
      <section className="relative h-[70vh] min-h-[520px] flex items-center justify-center overflow-hidden mb-20">
        <div className="absolute inset-0 bg-[url('https://img.lightshot.app/M554D-EUQiil2yZ99SHVMQ.jpg')] bg-cover bg-center opacity-[0.18]" />
        <YouTubeBackground videoId="zF5Ddo9JdpY" />
        <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-void/75 to-void" />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/30 to-void" />
        <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-volt/10 blur-3xl" aria-hidden />
        <div className="absolute -bottom-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-lolblue/10 blur-3xl" aria-hidden />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-volt/50 to-transparent" />

        <Reveal className="relative z-10 container mx-auto px-4 text-center">
          <p className="eyebrow justify-center mb-4"><span className="live-dot" /> System Overview</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-ink mb-4 uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
            What is InHouse?
          </h1>
          <p className="text-lg text-mute max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            InHouse is a competitive gaming system where players participate in organized 5v5 matches within our community. Experience fair, balanced games with players of similar skill levels.
          </p>
        </Reveal>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <RevealGroup className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16" stagger={0.15}>
          <RevealItem>
            <div className="clip-card bg-panel p-8 border border-line h-full">
              <div className="w-14 h-14 bg-lolblue/10 border border-lolblue/30 clip-tag flex items-center justify-center mb-6">
                <Trophy className="w-7 h-7 text-lolblue" />
              </div>
              <h2 className="font-display text-2xl font-bold text-ink mb-4 uppercase">Competitive Environment</h2>
              <p className="text-mute leading-relaxed mb-4">
                All matches are played with serious intent to win. Our system ensures balanced teams based on player skill and rank, creating competitive and exciting games every time.
              </p>
              <ul className="space-y-2 text-mute text-sm">
                <li className="flex items-start"><span className="text-lolblue mr-2">▸</span><span>Balanced team composition</span></li>
                <li className="flex items-start"><span className="text-lolblue mr-2">▸</span><span>Ranked-based matchmaking</span></li>
                <li className="flex items-start"><span className="text-lolblue mr-2">▸</span><span>Points and rewards system</span></li>
              </ul>
            </div>
          </RevealItem>

          <RevealItem>
            <div className="clip-card bg-panel p-8 border border-line h-full">
              <div className="w-14 h-14 bg-valred/10 border border-valred/30 clip-tag flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-valred" />
              </div>
              <h2 className="font-display text-2xl font-bold text-ink mb-4 uppercase">Community Driven</h2>
              <p className="text-mute leading-relaxed mb-4">
                Join a thriving community of passionate players who love competitive gaming. Make new friends, form lasting connections, and improve your skills together.
              </p>
              <ul className="space-y-2 text-mute text-sm">
                <li className="flex items-start"><span className="text-valred mr-2">▸</span><span>Active Discord community</span></li>
                <li className="flex items-start"><span className="text-valred mr-2">▸</span><span>Regular tournaments and events</span></li>
                <li className="flex items-start"><span className="text-valred mr-2">▸</span><span>Friendly and supportive environment</span></li>
              </ul>
            </div>
          </RevealItem>
        </RevealGroup>

        <Reveal>
          <div className="hud-corners bg-panel2 border border-line clip-card-lg p-8 md:p-12 mb-16">
            <p className="eyebrow justify-center mb-3">Onboarding Sequence</p>
            <h2 className="font-display text-3xl font-bold text-ink mb-10 text-center uppercase">How to Participate</h2>
            <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.12}>
              {[
                { n: '01', title: 'Join Discord', desc: 'Join our Discord server and verify your account', color: 'volt' },
                { n: '02', title: 'Join the Queue', desc: 'Head to the queue channel and click Join Queue to get matched into a game', color: 'gold' },
                { n: '03', title: 'Climb the Ranking', desc: 'Win your matches to earn points, climb the leaderboard, and get recognized as a top performer', color: 'valred' },
              ].map((step) => (
                <RevealItem key={step.n}>
                  <div className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 clip-tag flex items-center justify-center font-mono font-bold text-lg border ${
                      step.color === 'volt' ? 'bg-volt/10 border-volt/40 text-volt' :
                      step.color === 'gold' ? 'bg-gold/10 border-gold/40 text-gold' :
                      'bg-valred/10 border-valred/40 text-valred'
                    }`}>
                      {step.n}
                    </div>
                    <h3 className="font-display text-xl font-semibold text-ink mb-2 uppercase">{step.title}</h3>
                    <p className="text-mute text-sm">{step.desc}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Reveal>

        <Reveal>
          <div className="clip-card-lg bg-panel border border-line p-8 mb-16">
            <div className="flex items-center mb-6">
              <Ticket className="w-8 h-8 text-volt mr-3" />
              <h2 className="font-display text-3xl font-bold text-ink uppercase">Ticket System</h2>
            </div>
            <p className="text-mute mb-8 leading-relaxed">
              Need help, have a question, or found a bug? Open a ticket and pick the category that fits — our team
              picks it up from there.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 items-center">
              <div className="hud-corners clip-card border border-line overflow-hidden">
                <img src={ticketImg.src} alt="InHouse ticket category selector in Discord" className="w-full h-auto" />
              </div>
              <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4" stagger={0.08}>
                {ticketCategories.map(({ title, tag, icon: Icon, desc }) => (
                  <RevealItem key={tag}>
                    <div className="clip-card bg-void p-5 border border-line h-full">
                      <div className="w-10 h-10 bg-volt/10 border border-volt/30 clip-tag flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-volt" />
                      </div>
                      <h3 className="font-display font-semibold text-ink uppercase text-sm mb-1">{title}</h3>
                      <p className="font-mono text-[10px] text-mute/60 mb-2">{tag}</p>
                      <p className="text-mute text-xs leading-relaxed">{desc}</p>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>

            <div className="bg-volt/5 border border-volt/20 clip-card p-6">
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-volt mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-display text-lg font-semibold text-ink mb-2 uppercase">Important Notes</h4>
                  <ul className="space-y-2 text-mute text-sm">
                    <li>• Pick the category that best matches your issue so it reaches the right team faster</li>
                    <li>• Tickets are handled in the order they&apos;re received</li>
                    <li>• Include as much detail as you can — screenshots help</li>
                    <li>• Be respectful and follow community guidelines at all times</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="text-center">
          <GlowButton href="https://discord.gg/dCjJ6fFH4g" variant="volt">
            Join Discord and Start Playing
          </GlowButton>
        </Reveal>
      </div>
    </div>
  );
}
