import { MessageCircle } from 'lucide-react';
import { Reveal, RevealGroup, RevealItem } from '../components/Reveal';
import GlowButton from '../components/GlowButton';
import YouTubeBackground from '../components/YouTubeBackground';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-void">
      <section className="relative h-[70vh] min-h-[520px] flex items-center justify-center overflow-hidden mb-20">
        <div className="absolute inset-0 bg-[url('https://img.lightshot.app/M554D-EUQiil2yZ99SHVMQ.jpg')] bg-cover bg-center opacity-[0.18]" />
        <YouTubeBackground videoId="zF5Ddo9JdpY" />
        <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-void/75 to-void" />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/30 to-void" />
        <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-volt/10 blur-3xl" aria-hidden />
        <div className="absolute -bottom-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-valred/10 blur-3xl" aria-hidden />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-volt/50 to-transparent" />

        <Reveal className="relative z-10 container mx-auto px-4 text-center">
          <p className="eyebrow justify-center mb-4"><span className="live-dot" /> Recruitment Open</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-ink mb-4 uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">Join Our Community</h1>
          <p className="text-lg text-mute max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            Ready to start playing? Join our Discord server and connect with us on social media. We're here to help you get started.
          </p>
        </Reveal>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24">

        <Reveal className="max-w-4xl mx-auto mb-16">
          <div className="hud-corners clip-card-lg bg-panel border-2 border-volt/30 p-8 md:p-12 text-center">
            <MessageCircle className="w-16 h-16 text-volt mx-auto mb-6" />
            <h2 className="font-display text-3xl font-bold text-ink mb-4 uppercase">Discord Server</h2>
            <p className="text-mute mb-8 leading-relaxed max-w-xl mx-auto">
              Our Discord server is the heart of the community. Join to participate in InHouse matches, connect with other players, and stay updated on events and tournaments.
            </p>
            <div className="flex justify-center">
              <GlowButton href="https://discord.gg/dCjJ6fFH4g" variant="volt">
                Join Discord Server
              </GlowButton>
            </div>
          </div>
        </Reveal>

        <Reveal className="max-w-4xl mx-auto mb-16">
          <div className="clip-card-lg bg-panel2 border border-line p-8">
            <p className="eyebrow justify-center mb-3">Onboarding Sequence</p>
            <h2 className="font-display text-2xl font-bold text-ink mb-8 text-center uppercase">Getting Started Guide</h2>
            <RevealGroup className="space-y-5" stagger={0.1}>
              {[
                { n: '01', title: 'Join the Discord Server', desc: 'Click the "Join Discord" button above and accept the server invite.' },
                { n: '02', title: 'Complete Verification', desc: 'Follow the verification process to access all channels and features.' },
                { n: '03', title: 'Register Your Rank', desc: 'Submit your in-game rank so the queue can build fair, balanced matches.' },
                { n: '04', title: 'Join Your First Queue', desc: 'Head to the queue channel and click Join Queue to enter your first match.' },
                { n: '05', title: 'Play and Have Fun', desc: 'Wait for your match assignment, join the lobby, and compete!' },
              ].map((step) => (
                <RevealItem key={step.n}>
                  <div className="flex items-start bg-void/60 p-5 clip-card border border-line">
                    <div className="w-10 h-10 bg-volt/10 border border-volt/40 clip-tag flex items-center justify-center mr-4 flex-shrink-0 font-mono text-volt font-bold text-sm">
                      {step.n}
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-semibold text-ink mb-1 uppercase">{step.title}</h4>
                      <p className="text-mute text-sm">{step.desc}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Reveal>

        <Reveal className="text-center">
          <p className="text-mute mb-6">
            Have questions? Need help? Our community moderators are always ready to assist you.
          </p>
          <GlowButton href="https://discord.gg/dCjJ6fFH4g" variant="volt">
            Join Discord Now
          </GlowButton>
        </Reveal>
      </div>
    </div>
  );
}
