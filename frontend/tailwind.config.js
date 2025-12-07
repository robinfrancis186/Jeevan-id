/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e7f0ff',
          100: '#c7d9ff',
          200: '#a4c0ff',
          300: '#82a7ff',
          400: '#5d8aff',
          500: '#3c6df5',
          600: '#2f55c4',
          700: '#234092',
          800: '#182b61',
          900: '#0e1735',
        },
      },
    },
  },
  plugins: [],
}

