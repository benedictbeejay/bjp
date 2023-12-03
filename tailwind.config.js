/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       colors: {
         veryDarkBlue: '#14252c',
         veryDarkGrey: '#273c41',
         darkGrey: '#45575b',
         lightGrey: '#a3a39b',
         cream: '#ebcab3',
         sand: '#b2401d'
      },
    },
  },
  plugins: [],
}

