/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1230px',
    },
    fontFamily: {
      primary: ['Inter', 'sans-serif'],
      secondary: 'Playfair Display',
    },

    extend: {
      colors: {
        primary: {
          DEFAULT: '#1b1b1b',
          hover: '#343e4a',
        },
        secondary: '#4d5053',
        accent: {
          DEFAULT: '#cda274',
          secondary: ' #f4f0ec',
          hover: '#b88c5d',
        },
      },
      backgroundImage: {
        hero: 'url(./src/images/bg.jpg)',
        grid: 'url(/images/grid.png)',
      },
    },
  },
  plugins: [],
};
