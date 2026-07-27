import type { Metadata } from 'next';
import { ListOrdered, Users, Split, Lock, Activity, Crown, BarChart3 } from 'lucide-react';
import { Reveal, RevealGroup, RevealItem } from '@/components/Reveal';
import GlowButton from '@/components/GlowButton';
import YouTubeBackground from '@/components/YouTubeBackground';
import queueImg from '@/img/queue.png';

export const metadata: Metadata = {
  title: 'Queue System — InHouse League & Valorant',
  description:
    "Join the queue, get matched, and drop straight into your team's private channel — no tickets, no waiting on staff.",
};

const steps = [
  {
    n: '01',
    icon: ListOrdered,
    title: 'Join the Queue',
    desc: 'Head to the queue channel and click Join Queue to claim a slot. Leave anytime before the match locks in.',
  },
  {
    n: '02',
    icon: Users,
    title: 'Teams Fill Up',
    desc: 'Once both Slot 1 and Slot 2 are full, the queue locks and the system starts forming your match.',
  },
  {
    n: '03',
    icon: Split,
    title: 'Private Team Channels',
    desc: 'Two private channels are created automatically — Team Red and Team Blue — and every player is moved into the channel for their assigned team.',
  },
];

const features = [
  {
    icon: Activity,
    title: 'Dynamic MMR',
    desc: 'Team balance recalculates in real time as players join, keeping every match fair.',
  },
  {
    icon: Crown,
    title: 'Captain Mode',
    desc: 'Optional captain-pick drafting for queues that want more control over team composition.',
  },
  {
    icon: BarChart3,
    title: 'Unique Leaderboard',
    desc: 'Every queued match feeds the community leaderboard automatically — no manual reporting.',
  },
];

export default function QueuePage() {
  return (
    <div className="min-h-screen bg-void">
      <section className="relative h-[70vh] min-h-[520px] flex items-center justify-center overflow-hidden mb-20">
        <div className="absolute inset-0 bg-[url('https://img.lightshot.app/M554D-EUQiil2yZ99SHVMQ.jpg')] bg-cover bg-center opacity-[0.18]" />
        <YouTubeBackground videoId="zF5Ddo9JdpY" />
        <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-void/75 to-void" />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/30 to-void" />
        <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-volt/10 blur-3xl" aria-hidden />
        <div className="absolute -bottom-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-lolblue/10 blur-3xl" aria-hidden />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-volt to-lolblue" />

        <Reveal className="relative z-10 container mx-auto px-4 text-center">
          <p className="eyebrow justify-center mb-4"><span className="live-dot" /> Matchmaking</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-ink mb-4 uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">Queue System</h1>
          <p className="text-lg text-mute max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            Join the queue, get matched, and drop straight into your team&apos;s private channel — no tickets, no waiting on staff.
          </p>
        </Reveal>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <Reveal>
          <div className="hud-corners bg-panel2 border border-line clip-card-lg p-8 md:p-12 mb-16">
            <p className="eyebrow justify-center mb-3">How It Works</p>
            <h2 className="font-display text-3xl font-bold text-ink mb-10 text-center uppercase">From Queue to Match</h2>
            <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.12}>
              {steps.map((step) => (
                <RevealItem key={step.n}>
                  <div className="text-center h-full flex flex-col items-center">
                    <div className="w-16 h-16 mb-4 clip-tag flex items-center justify-center border bg-volt/10 border-volt/40 text-volt">
                      <step.icon className="w-7 h-7" />
                    </div>
                    <p className="font-mono text-xs text-volt/70 mb-2">{step.n}</p>
                    <h3 className="font-display text-xl font-semibold text-ink mb-2 uppercase">{step.title}</h3>
                    <p className="text-mute text-sm">{step.desc}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>

            <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 max-w-xl mx-auto" stagger={0.1}>
              <RevealItem>
                <div className="clip-card bg-valred/10 border border-valred/30 p-5 flex items-center gap-3">
                  <Lock className="w-5 h-5 text-valred flex-shrink-0" />
                  <div>
                    <p className="font-display font-bold text-ink uppercase text-sm">Team Red</p>
                    <p className="font-mono text-[10px] text-valred uppercase tracking-widest">Private channel created</p>
                  </div>
                </div>
              </RevealItem>
              <RevealItem>
                <div className="clip-card bg-lolblue/10 border border-lolblue/30 p-5 flex items-center gap-3">
                  <Lock className="w-5 h-5 text-lolblue flex-shrink-0" />
                  <div>
                    <p className="font-display font-bold text-ink uppercase text-sm">Team Blue</p>
                    <p className="font-mono text-[10px] text-lolblue uppercase tracking-widest">Private channel created</p>
                  </div>
                </div>
              </RevealItem>
            </RevealGroup>
          </div>
        </Reveal>

        <Reveal className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="hud-corners clip-card-lg border border-line overflow-hidden">
              <img src={queueImg.src} alt="InHouse Queue panel in Discord" className="w-full h-auto" />
            </div>
            <div>
              <p className="eyebrow mb-3">Live In Discord</p>
              <h2 className="font-display text-3xl font-bold text-ink mb-4 uppercase">The Queue Panel</h2>
              <p className="text-mute leading-relaxed mb-6">
                Every queue posts a live panel right in Discord. Players see the game, region, and whether Dynamic MMR
                or Captain Mode is active, then join Slot 1 or Slot 2 with a single click. When a slot fills up, the
                panel updates instantly for everyone watching.
              </p>
              <ul className="space-y-3 text-mute text-sm">
                <li className="flex items-start"><span className="text-volt mr-2">▸</span><span>Join or leave the queue with one click, no commands to remember</span></li>
                <li className="flex items-start"><span className="text-volt mr-2">▸</span><span>Slot status updates live so you always know how close the match is</span></li>
                <li className="flex items-start"><span className="text-volt mr-2">▸</span><span>Manage Queue controls let moderators adjust or reset a stuck lobby</span></li>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal className="mb-16">
          <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.12}>
            {features.map(({ icon: Icon, title, desc }) => (
              <RevealItem key={title}>
                <div className="clip-card bg-panel p-6 border border-line hover:border-volt/60 transition-colors h-full">
                  <div className="w-14 h-14 bg-volt/10 border border-volt/30 clip-tag flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-volt" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink mb-3 uppercase">{title}</h3>
                  <p className="text-mute leading-relaxed text-sm">{desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>

        <Reveal className="text-center">
          <GlowButton href="https://discord.gg/dCjJ6fFH4g" variant="volt">
            Join Discord and Enter the Queue
          </GlowButton>
        </Reveal>
      </div>
    </div>
  );
}
