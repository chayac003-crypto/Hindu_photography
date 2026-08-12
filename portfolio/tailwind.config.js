/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        char: {
          950: '#000000',
          900: '#080808',
          800: '#111111',
          700: '#1a1a1a',
          600: '#222222',
        },
        brick: {
          400: '#E8763A',
          500: '#C95A28',
          600: '#A84520',
          700: '#7A3720',
        },
        gold: {
          300: '#EFD79A',
          400: '#DDBB6A',
          500: '#C9A227',
          600: '#A9871F',
        },
        beigegold: {
          400: '#E6C5A4',
          500: '#D8B48F',
          600: '#C49C75',
        },
        ivory: '#F5EDE0',
        stone: '#948577',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', '"Alex Brush"', 'cursive'],
        body: ['"Outfit"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'stone-grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.042'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        kenburns: {
          '0%':   { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.14) translate(-1.5%, -1%)' },
        },
        kenburns2: {
          '0%':   { transform: 'scale(1.1) translate(1%, 0)' },
          '100%': { transform: 'scale(1) translate(-1%, -1%)' },
        },
        drift: {
          '0%':   { transform: 'translateY(0) translateX(0)', opacity: 0 },
          '10%':  { opacity: 0.8 },
          '90%':  { opacity: 0.5 },
          '100%': { transform: 'translateY(-110vh) translateX(20px)', opacity: 0 },
        },
        flicker: {
          '0%,100%': { opacity: 0.85 },
          '45%':     { opacity: 1 },
          '52%':     { opacity: 0.68 },
          '70%':     { opacity: 0.95 },
        },
        spinslow: {
          '0%':   { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseglow: {
          '0%,100%': { opacity: 0.18, transform: 'scale(1)' },
          '50%':     { opacity: 0.32, transform: 'scale(1.06)' },
        },
        fadeInUp: {
          '0%':   { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideRight: {
          '0%':   { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        bounceY: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(6px)' },
        },
        scrollLine: {
          '0%':   { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%':  { transform: 'scaleY(1)', transformOrigin: 'top' },
          '51%':  { transform: 'scaleY(1)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
      },
      animation: {
        'kenburns':    'kenburns 24s ease-out forwards',
        'kenburns2':   'kenburns2 24s ease-out forwards',
        'drift':       'drift linear infinite',
        'flicker':     'flicker 4.5s ease-in-out infinite',
        'spinslow':    'spinslow 60s linear infinite',
        'pulseglow':   'pulseglow 3.5s ease-in-out infinite',
        'fadeinup':    'fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'fadein':      'fadeIn 0.6s ease forwards',
        'slideright':  'slideRight 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'bouncy':      'bounceY 1.6s ease-in-out infinite',
        'scrollline':  'scrollLine 2s ease-in-out infinite',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
