/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
      colors:{
        primary:'#7e3af2',
        darkColor:'#1a1c23',
        darkBg:'#121317'
      }
    },
  },
  plugins: [],
}

