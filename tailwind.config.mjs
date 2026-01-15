/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e01c3b',
          50: '#fef2f3',
          100: '#fde6e8',
          200: '#fbd0d6',
          300: '#f7aab4',
          400: '#f1798c',
          500: '#e64d66',
          600: '#e01c3b',
          700: '#be1430',
          800: '#9e142d',
          900: '#86162c',
          950: '#4a0613',
        },
        dark: {
          DEFAULT: '#1a1a1a',
          50: '#f8f8f8',
          100: '#ebebeb',
          200: '#d6d6d6',
          300: '#a3a3a3',
          400: '#737373',
          500: '#525252',
          600: '#404040',
          700: '#363636',
          800: '#2a2a2a',
          900: '#1f1f1f',
          950: '#141414',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
};
