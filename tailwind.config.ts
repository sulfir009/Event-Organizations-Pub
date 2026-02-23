import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 18px 40px rgba(30, 13, 47, 0.2)',
      },
      colors: {
        ink: '#241633',
        mutedInk: '#7C6F92',
      },
    },
  },
  plugins: [],
} satisfies Config;
