'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Variant = 'volt' | 'blue' | 'red' | 'ghost';

const variantStyles: Record<Variant, string> = {
  volt: 'bg-volt text-void hover:shadow-[0_0_32px_rgba(255,122,41,0.4)]',
  blue: 'bg-lolblue text-white hover:shadow-[0_0_32px_rgba(59,130,246,0.4)]',
  red: 'bg-valred text-white hover:shadow-[0_0_32px_rgba(255,70,85,0.4)]',
  ghost: 'bg-transparent text-ink border border-line hover:border-volt/60 hover:bg-panel',
};

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  external?: boolean;
  className?: string;
}

export default function GlowButton({
  children,
  href,
  onClick,
  variant = 'volt',
  external = true,
  className = '',
}: GlowButtonProps) {
  const classes = `clip-btn group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-display text-base font-bold uppercase tracking-[0.08em] transition-shadow duration-300 ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      <span className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/25 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-[280%]" />
      </span>
    </>
  );

  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { scale: 0.97 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} className={classes} {...motionProps}>
      {content}
    </motion.button>
  );
}
