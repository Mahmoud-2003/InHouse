'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Crown, Medal, Trophy, ClipboardList, Gift } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal, RevealGroup, RevealItem } from '@/components/Reveal';
import GlowButton from '@/components/GlowButton';
import YouTubeBackground from '@/components/YouTubeBackground';
import { staggerContainer, staggerItem } from '@/lib/motion';
import tournamentImg from '@/img/tournament.png';

interface LeaderboardEntry {
  rank: number;
  name: string;
  wins: number;
  losses: number;
  winRate: number;
}

export default function HomeContent() {
  const router = useRouter();
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    let cancelled = false;

    fetch('/api/leaderboard')
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('bad response'))))
      .then((data) => {
        if (cancelled) return;
        setLeaderboard(data.entries ?? []);
        setStatus('ready');
      })
      .catch(() => {
        if (cancelled) return;
        setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="min-h-screen bg-void text-ink font-sans selection:bg-volt/30">

      {/* Hero Section */}
      <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://img.lightshot.app/M554D-EUQiil2yZ99SHVMQ.jpg')] bg-cover bg-center opacity-[0.14]" />
        <YouTubeBackground videoId="zF5Ddo9JdpY" />
        <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-void/75 to-void" />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/30 to-void" />
        <div
          className="absolute -top-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-lolblue/10 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -bottom-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-valred/10 blur-3xl"
          aria-hidden
        />

        <motion.div
          className="relative z-10 container mx-auto px-4 text-center"
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.12, 0.1)}
        >
          <motion.div variants={staggerItem} className="eyebrow justify-center mb-6">
            <span className="live-dot" /> Season Live // Ranked Ladder Open
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="font-display text-6xl sm:text-8xl font-bold text-ink mb-6 leading-[0.95] uppercase tracking-tight"
          >
            InHouse
            <span className="block bg-gradient-to-r from-volt to-lolblue bg-clip-text text-transparent">
              League &amp; Valorant
            </span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-lg sm:text-xl text-mute mb-12 max-w-2xl mx-auto italic"
          >
            &ldquo;Proven mechanical skill meets organized strategy&rdquo;
          </motion.p>

          <motion.div variants={staggerItem} className="flex flex-wrap items-center justify-center gap-4">
            <GlowButton href="https://discord.gg/dCjJ6fFH4g" variant="volt">
              Join Discord Server <ArrowRight className="w-4 h-4" />
            </GlowButton>
            <GlowButton onClick={() => router.push('/inhouse')} variant="ghost">
              Learn More
            </GlowButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.4em] text-mute/60 uppercase"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.4, repeat: Infinity }}
        >
          Scroll
        </motion.div>
      </section>

      {/* Tournament Announcement Section */}
      <section className="py-20 relative z-10 bg-void">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="hud-corners clip-card-lg border border-line bg-panel overflow-hidden">
              <div className="relative w-full aspect-video">
                <img
                  src={tournamentImg.src}
                  alt="Warriors' House tournament banner"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent" />
              </div>

              <div className="p-6 sm:p-10">
                <p className="eyebrow mb-4">
                  <span className="live-dot" /> Tournament Announcement
                </p>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-ink uppercase mb-2">
                  Warriors&apos; House
                </h2>
                <p className="font-display text-lg text-lolblue font-semibold uppercase mb-4">
                  League of Legends Tournament &mdash; Summoner&apos;s Rift Championship
                </p>
                <p className="text-mute leading-relaxed mb-10 max-w-3xl">
                  Join us for a competitive League of Legends tournament where strategy, coordination, and
                  mechanical skill determine who rises to the top. Gather your team and compete against strong
                  opponents in a structured and professionally organized event.
                </p>

                <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10" stagger={0.08}>
                  <RevealItem>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 bg-volt/10 border border-volt/30 clip-tag flex items-center justify-center flex-shrink-0">
                        <Trophy className="w-4 h-4 text-volt" />
                      </div>
                      <h3 className="font-display font-semibold text-ink uppercase text-sm">Tournament Format</h3>
                    </div>
                    <ul className="space-y-1.5 text-mute text-sm pl-10">
                      <li className="flex items-start"><span className="text-volt mr-2">▸</span><span>5v5 Teams</span></li>
                      <li className="flex items-start"><span className="text-volt mr-2">▸</span><span>Single Elimination Bracket</span></li>
                      <li className="flex items-start"><span className="text-volt mr-2">▸</span><span>Best of 1 (Bo1) matches</span></li>
                      <li className="flex items-start"><span className="text-volt mr-2">▸</span><span>Grand Final: Best of 3 (Bo3)</span></li>
                      <li className="flex items-start"><span className="text-volt mr-2">▸</span><span>Map: Summoner&apos;s Rift</span></li>
                      <li className="flex items-start"><span className="text-volt mr-2">▸</span><span>Server: West</span></li>
                    </ul>
                  </RevealItem>

                  <RevealItem>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 bg-lolblue/10 border border-lolblue/30 clip-tag flex items-center justify-center flex-shrink-0">
                        <ClipboardList className="w-4 h-4 text-lolblue" />
                      </div>
                      <h3 className="font-display font-semibold text-ink uppercase text-sm">Rules &amp; Requirements</h3>
                    </div>
                    <ul className="space-y-1.5 text-mute text-sm pl-10">
                      <li className="flex items-start"><span className="text-lolblue mr-2">▸</span><span>All players must use official, personal accounts</span></li>
                      <li className="flex items-start"><span className="text-lolblue mr-2">▸</span><span>Sportsmanship and respectful conduct are mandatory</span></li>
                      <li className="flex items-start"><span className="text-lolblue mr-2">▸</span><span>Teams must check in at least 15 minutes before match time</span></li>
                      <li className="flex items-start"><span className="text-lolblue mr-2">▸</span><span>Match results must be reported promptly</span></li>
                    </ul>
                  </RevealItem>

                  <RevealItem>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 bg-gold/10 border border-gold/30 clip-tag flex items-center justify-center flex-shrink-0">
                        <Gift className="w-4 h-4 text-gold" />
                      </div>
                      <h3 className="font-display font-semibold text-ink uppercase text-sm">Prizes</h3>
                    </div>
                    <ul className="space-y-1.5 text-mute text-sm pl-10">
                      <li className="flex items-start"><span className="text-gold mr-2">▸</span><span>1st Place: 50 Chest &amp; Key + Custom Role (Champion)</span></li>
                      <li className="flex items-start"><span className="text-gold mr-2">▸</span><span>2nd Place: 30 Chest &amp; Key</span></li>
                      <li className="flex items-start"><span className="text-gold mr-2">▸</span><span>3rd Place: 20 Chest &amp; Key</span></li>
                    </ul>
                  </RevealItem>
                </RevealGroup>

                <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-line">
                  <p className="font-mono text-xs tracking-[0.25em] text-mute/70 uppercase">
                    16 &amp; 17 August, 2026 &mdash; 7:00 PM (GMT+2) &middot; 16 Teams &middot; Registration Open
                  </p>
                  <GlowButton
                    href="https://battlefy.com/league-of-inhouses/warriorshouse/6a7305db8d58e4001a5a00ea/info?infoTab=details"
                    variant="volt"
                  >
                    Register on Battlefy <ArrowRight className="w-4 h-4" />
                  </GlowButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="py-24 relative z-10 bg-void">
        <div className="container mx-auto px-4">
          <Reveal className="text-center mb-14">
            <p className="eyebrow justify-center mb-3"><span className="live-dot" /> Season Rankings</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink uppercase mb-4">Top 20 League Leaderboard</h2>
            <p className="text-mute max-w-2xl mx-auto">
              The highest-ranked InHouse competitors, ranked by points earned across every match.
            </p>
          </Reveal>

          <Reveal>
            <div className="hud-corners max-w-3xl mx-auto bg-panel border border-line clip-card-lg overflow-hidden">
              {status === 'loading' ? (
                <div className="px-6 py-10 text-center">
                  <p className="font-mono text-xs text-mute/60 uppercase tracking-widest">Loading standings…</p>
                </div>
              ) : leaderboard.length === 0 ? (
                <div className="px-6 py-10 text-center">
                  <p className="font-mono text-xs text-mute/60 uppercase tracking-widest">
                    {status === 'error' ? 'Leaderboard unavailable right now' : 'No suitable records to display'}
                  </p>
                </div>
              ) : (
                <RevealGroup stagger={0.06}>
                  {leaderboard.map(({ rank, name, wins, losses, winRate }) => (
                    <RevealItem key={rank}>
                      <div className={`flex items-center gap-4 px-6 py-4 border-b border-line last:border-b-0 ${rank <= 3 ? 'bg-white/[0.02]' : ''}`}>
                        <div
                          className={`w-10 h-10 flex-shrink-0 clip-tag flex items-center justify-center font-mono font-bold text-sm border ${
                            rank === 1
                              ? 'bg-gold/10 border-gold/40 text-gold'
                              : rank === 2
                              ? 'bg-white/10 border-white/30 text-ink'
                              : rank === 3
                              ? 'bg-valred/10 border-valred/30 text-valred'
                              : 'bg-void border-line text-mute'
                          }`}
                        >
                          {rank === 1 ? <Crown className="w-4 h-4" /> : rank <= 3 ? <Medal className="w-4 h-4" /> : rank}
                        </div>
                        <p className="flex-1 min-w-0 font-display font-semibold text-ink uppercase tracking-wide truncate">
                          {name}
                        </p>
                        <p className="font-mono text-sm text-mute flex-shrink-0">
                          {wins}W {losses}L <span className="text-ink/80">{winRate}%</span> WR
                        </p>
                      </div>
                    </RevealItem>
                  ))}
                </RevealGroup>
              )}
              <div className="px-6 py-4 bg-void/60 text-center">
                <p className="font-mono text-[10px] tracking-[0.3em] text-mute/60 uppercase">
                  Rankings update automatically once matches are reported
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Choose Game Section */}
      <section className="py-20 bg-void">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <p className="eyebrow justify-center mb-3">Pick Your Battlefield</p>
            <h2 className="font-display text-4xl font-bold text-ink uppercase">Choose Your Game</h2>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-8" stagger={0.15}>
            <RevealItem>
              <div onClick={() => router.push('/lol')} className="relative group cursor-pointer overflow-hidden clip-card-lg border border-line hover:border-lolblue/60 transition-colors h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-transparent z-10" />
                <img src="https://img.lightshot.app/zbmOUtzaROeDjNm5QaImsA.png" alt="LoL" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <p className="font-mono text-[10px] tracking-[0.3em] text-lolblue uppercase mb-2">5v5 // Summoner&apos;s Rift</p>
                  <h3 className="font-display text-3xl font-bold text-ink mb-2 uppercase">League of Legends</h3>
                  <div className="flex items-center text-lolblue font-semibold text-sm">Learn More <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" /></div>
                </div>
              </div>
            </RevealItem>
            <RevealItem>
              <div onClick={() => router.push('/valorant')} className="relative group cursor-pointer overflow-hidden clip-card-lg border border-line hover:border-valred/60 transition-colors h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-transparent z-10" />
                <img src="https://img.lightshot.app/Tdva4daYQpyNsS4yySiBYw.png" alt="Val" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <p className="font-mono text-[10px] tracking-[0.3em] text-valred uppercase mb-2">5v5 // Tactical Shooter</p>
                  <h3 className="font-display text-3xl font-bold text-ink mb-2 uppercase">Valorant</h3>
                  <div className="flex items-center text-valred font-semibold text-sm">Learn More <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" /></div>
                </div>
              </div>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      <footer className="py-10 text-center border-t border-line">
         <p className="text-mute/50 text-[10px] font-mono font-bold tracking-[0.5em] uppercase">Powered by InHouse Management System</p>
      </footer>
    </div>
  );
}
