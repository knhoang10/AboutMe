import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-black': '#141a1f',
        'card': '#161d24',
        'hover-background': '#277bcf',
        // Gold is a highlight only: shine, borders, gradient text. Blue stays the main accent.
        gold: { DEFAULT: '#c9a45c', light: '#e6d3a8', dark: '#8a6a2f' },
      },
      boxShadow: {
        'glow-blue': '0 0 0 1px rgba(59,130,246,0.25), 0 20px 50px -20px rgba(37,99,235,0.55)',
        'glow-gold': '0 0 0 1px rgba(201,164,92,0.35), 0 20px 50px -20px rgba(201,164,92,0.45)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'drift': 'drift 18s ease-in-out infinite',
        'marquee': 'marquee 45s linear infinite',
        'pulse-dot': 'pulse-dot 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        'drift': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(6%, -4%) scale(1.08)' },
          '66%': { transform: 'translate(-5%, 5%) scale(0.95)' },
        },
        'marquee': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'pulse-dot': {
          '75%, 100%': { transform: 'scale(2.2)', opacity: '0' },
        },
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
export default config
