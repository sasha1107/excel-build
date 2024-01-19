import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
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
          DEFAULT: '#bcf400',
          '50': '#fcffe4',
          '100': '#f8ffc5',
          '200': '#eeff92',
          '300': '#e0ff53',
          '400': '#ccfb20',
          '500': '#bcf400',
          '600': '#86b500',
          '700': '#658902',
          '800': '#516c08',
          '900': '#445b0c',
          '950': '#223300',
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
