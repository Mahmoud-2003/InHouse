/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        void: '#08090C',
        panel: '#12141A',
        panel2: '#181B22',
        line: '#23262F',
        ink: '#EDEFF5',
        mute: '#8A8F9C',
        volt: '#FF7A29',
        gold: '#E8B44C',
        emerald: '#34D399',
        lolblue: '#3B82F6',
        valred: '#FF4655',
      },
      fontFamily: {
        display: ['var(--font-rajdhani)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      clipPath: {
        card: 'polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 0 100%)',
        cardLg: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)',
        tag: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.25 },
        },
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        blink: 'blink 1.6s ease-in-out infinite',
        scan: 'scan 2.4s linear infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.clip-card': {
          clipPath: 'polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 0 100%)',
        },
        '.clip-card-lg': {
          clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)',
        },
        '.clip-tag': {
          clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)',
        },
        '.clip-btn': {
          clipPath: 'polygon(14px 0, 100% 0, 100% 100%, 0 100%, 0 14px)',
        },
      });
    },
  ],
};
