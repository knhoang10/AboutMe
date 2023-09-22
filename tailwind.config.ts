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
        'hover-background': '#277bcf'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'shake': 'shake 4s ease infinite',
      },
      keyframes: {
        'shake': {
          '0%, 100%': { 'transform': 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { 'transform': 'translateX(-10px)' },
          '20%, 40%, 60%, 80%': { 'transform': 'translateX(10px)' },
        }
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
