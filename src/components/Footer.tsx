import { FaDiscord, FaFacebook } from 'react-icons/fa';
import { Reveal } from './Reveal';
import logo from '../img/logo.gif';

export default function Footer() {
  return (
    <footer className="relative bg-panel border-t border-line overflow-hidden md:pl-20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-volt to-lolblue" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-9 h-9 object-contain"
                />
                <span className="font-display text-lg font-bold uppercase tracking-wide text-ink">
                  InHouse League &amp; Valorant
                </span>
              </div>
              <p className="text-mute text-sm leading-relaxed max-w-sm">
                A competitive gaming community for League of Legends and Valorant players.
                Join us for organized InHouse matches and climb the leaderboard.
              </p>
            </div>

            <div>
              <h3 className="eyebrow mb-4">
                <span className="live-dot" /> Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://discord.gg/dCjJ6fFH4g"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-mute hover:text-volt transition-colors text-sm flex items-center gap-2"
                  >
                    <FaDiscord className="w-4 h-4" />
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61586728110774&locale=ar_AR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-mute hover:text-volt transition-colors text-sm flex items-center gap-2"
                  >
                    <FaFacebook className="w-4 h-4" />
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="eyebrow mb-4">Status</h3>
              <div className="clip-card bg-void border border-line px-5 py-4 font-mono text-xs text-mute">
                <p className="flex items-center justify-between mb-2">
                  <span>MATCH SYSTEM</span>
                  <span className="text-volt">ONLINE</span>
                </p>
                <p className="flex items-center justify-between">
                  <span>TICKETS</span>
                  <span className="text-volt">OPEN</span>
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="border-t border-line mt-10 pt-8 text-center">
          <p className="font-mono text-[11px] text-mute/70 tracking-widest uppercase">
            &copy; 2025 InHouse League &amp; Valorant — Not affiliated with Riot Games
          </p>
        </div>
      </div>
    </footer>
  );
}
