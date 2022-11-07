/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#38bdf8',
        'cyan-blue': '#6b7280,',
      },
      fontFamily: {
        khand: ['Khand', 'sans-serif'],
        grace: ['Covered By Your Grace', 'cursive'],
      },
      boxShadow: {
        tooltip: '0 4px 8px 0 #1e293b',
      },
      animation: {
        'head-shake': 'head-shake 1.5s ease-out 0s both',
        'fade-in': 'fade-in 1s ease-in-out',
        'fade-in-left': 'fade-in-left 1s ease-in-out',
        'fade-in-right': 'fade-in-right 1s ease-in-out',
        base: 'zoom-in 1.25s ease-out 0s both',
        jelly: 'jelly 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
