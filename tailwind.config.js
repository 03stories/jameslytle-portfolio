/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7ff',
          100: '#ebf0fe',
          200: '#d6e0fd',
          300: '#b3c7fb',
          400: '#89a4f8',
          500: '#6180f4',
          600: '#405dea',
          700: '#2e46d5',
          800: '#2a3bae',
          900: '#293689',
        },
        accent: {
          50: '#fef2f3',
          100: '#fde6e7',
          200: '#fccfd2',
          300: '#f9a8ae',
          400: '#f57583',
          500: '#ec4557',
          600: '#d82538',
          700: '#b61b2b',
          800: '#971b27',
          900: '#7d1c25',
        },
        neutral: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#4d4d4d',
          700: '#3d3d3d',
          800: '#292929',
          900: '#141414',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        'playful': '4px 4px 0px 0px rgba(0, 0, 0, 0.2)',
        'workshop': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 4px 4px 0px 0px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
}