/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'port-gradient':'linear-gradient(300deg, #000000, #000016);',
        'light-gradient':'linear-gradient(300deg, #f0f9ff, #e0f2fe);',
        'smooth-gradient':'linear-gradient(45deg, #262626, transparent);',
        'smooth-gradient-up':'linear-gradient(0deg, #262626, transparent);',
      },
      fontFamily:{
        'principal': "'Krona One', sans-serif;",
        'secundaria': "'Montserrat', sans-serif;"
      },
      backdropBlur: {
        xs: '2px',
      },
      colors: {
        'glass-bg': 'rgba(255, 255, 255, 0.1)',
        'glass-border': 'rgba(255, 255, 255, 0.2)',
        'glass-bg-dark': 'rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
