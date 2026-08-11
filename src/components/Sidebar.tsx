'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Gamepad2, Swords, Crosshair, ListOrdered, UserPlus, Handshake } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';
import logo from '../img/logo.gif';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/inhouse', label: 'InHouse', icon: Gamepad2 },
  { href: '/lol', label: 'League of Legends', icon: Swords },
  { href: '/valorant', label: 'Valorant', icon: Crosshair },
  { href: '/queue', label: 'Queue', icon: ListOrdered },
  { href: '/partners', label: 'Partners', icon: Handshake },
  { href: '/contact', label: 'Join Us', icon: UserPlus },
];

const COLLAPSED = 80;
const EXPANDED = 264;

const labelMotion = {
  initial: { opacity: 0, x: -8 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -8 },
  transition: { duration: 0.16 },
};

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();

  return (
    <motion.aside
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      animate={{ width: expanded ? EXPANDED : COLLAPSED }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="hidden md:flex fixed inset-y-0 left-0 z-[60] flex-col bg-panel border-r border-line overflow-hidden"
      style={{ width: COLLAPSED }}
    >
      <Link href="/" className="h-16 flex items-center border-b border-line flex-shrink-0">
        <span className="w-20 flex-shrink-0 flex items-center justify-center">
          <img src={logo.src} alt="Logo" className="w-9 h-9 object-contain" />
        </span>
        <AnimatePresence>
          {expanded && (
            <motion.span {...labelMotion} className="font-display text-sm font-bold uppercase tracking-wide text-ink whitespace-nowrap pr-4">
              InHouse
            </motion.span>
          )}
        </AnimatePresence>
      </Link>

      <nav className="flex-1 py-3 flex flex-col gap-0.5 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex items-center h-14 flex-shrink-0 group transition-colors ${
                isActive ? 'text-volt' : 'text-mute hover:text-ink'
              }`}
            >
              {isActive && <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-volt" />}
              <span
                className={`absolute inset-0 transition-colors ${
                  isActive ? 'bg-volt/10' : 'group-hover:bg-panel2'
                }`}
              />
              <span className="relative z-10 w-20 flex-shrink-0 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </span>
              <AnimatePresence>
                {expanded && (
                  <motion.span
                    {...labelMotion}
                    className="relative z-10 font-display text-sm font-semibold uppercase tracking-wide whitespace-nowrap pr-4"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          );
        })}
      </nav>

      <a
        href="https://discord.gg/dCjJ6fFH4g"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center h-14 flex-shrink-0 border-t border-line text-mute hover:text-volt group transition-colors"
      >
        <span className="absolute inset-0 transition-colors group-hover:bg-panel2" />
        <span className="relative z-10 w-20 flex-shrink-0 flex items-center justify-center">
          <FaDiscord className="w-5 h-5" />
        </span>
        <AnimatePresence>
          {expanded && (
            <motion.span
              {...labelMotion}
              className="relative z-10 font-display text-sm font-semibold uppercase tracking-wide whitespace-nowrap pr-4"
            >
              Discord
            </motion.span>
          )}
        </AnimatePresence>
      </a>
    </motion.aside>
  );
}
