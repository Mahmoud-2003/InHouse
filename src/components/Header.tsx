'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '../img/logo.gif';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/inhouse', label: 'InHouse' },
  { href: '/lol', label: 'League of Legends' },
  { href: '/valorant', label: 'Valorant' },
  { href: '/queue', label: 'Queue' },
  { href: '/partners', label: 'Partners' },
  { href: '/contact', label: 'Join Us' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed w-full top-0 z-50 bg-void/85 backdrop-blur-md border-b border-line md:pl-20">
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-volt to-lolblue" />
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src={logo.src}
              alt="Logo"
              className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="flex flex-col items-start leading-none">
              <span className="font-display text-lg font-bold tracking-wide text-ink uppercase">
                InHouse
              </span>
              <span className="font-mono text-[9px] tracking-[0.35em] text-mute uppercase">
                League &amp; Valorant
              </span>
            </span>
          </Link>

          <a
            href="https://discord.gg/dCjJ6fFH4g"
            target="_blank"
            rel="noopener noreferrer"
            className="clip-btn hidden md:inline-flex px-5 py-2 bg-ink text-void font-display font-bold text-sm uppercase tracking-wide hover:bg-volt transition-colors"
          >
            Join Discord
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-ink hover:text-volt transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden border-t border-line"
            >
              <div className="py-4 space-y-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block w-full text-left px-4 py-2.5 font-display text-sm font-semibold uppercase tracking-wide transition-colors ${
                        pathname === item.href
                          ? 'bg-volt text-void clip-tag'
                          : 'text-mute hover:text-ink hover:bg-panel'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <a
                  href="https://discord.gg/dCjJ6fFH4g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clip-btn block w-full text-center mt-2 px-6 py-3 bg-ink text-void font-display font-bold text-sm uppercase tracking-wide"
                >
                  Join Discord
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
