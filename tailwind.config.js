/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'port-gradient':'linear-gradient(300deg, #000000, #000016);',
        'smooth-gradient':'linear-gradient(45deg, #262626, transparent);',
        'smooth-gradient-up':'linear-gradient(0deg, #262626, transparent);',
      },
      fontFamily:{
        'principal': "'Krona One', sans-serif;",
        'secundaria': "'Montserrat', sans-serif;"
      }
    },
  },
  plugins: [],
}

