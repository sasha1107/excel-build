import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          DEFAULT: '#7ce38b',
          '50': '#f1fcf2',
          '100': '#defae2',
          '200': '#c0f2c6',
          '300': '#7ce38b',
          '400': '#55d368',
          '500': '#2fb843',
          '600': '#219833',
          '700': '#1d782b',
          '800': '#1c5f27',
          '900': '#194e23',
          '950': '#082b0f',
        },
      },
      keyframes: {
        rainbow: {
          '0%, 100%': { color: '#fecaca' },
          '10%': { color: '#fdba74' },
          '20%': { color: '#fde68a' },
          '30%': { color: '#d9f99d' },
          '40%': { color: '#a7f3d0' },
          '50%': { color: '#99f6e4' },
          '60%': { color: '#bae6fd' },
          '70%': { color: '#c7d2fe' },
          '80%': { color: '#fbcfe8' },
          '90%': { color: '#fecdd3' },
        },
      },
      animation: {
        rainbow: 'rainbow 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
