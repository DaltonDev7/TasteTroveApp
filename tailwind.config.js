/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#E23E3E'
      },
      fontFamily:{
        poppins: 'poppins',
        roboto : 'roboto'
      }
    },
  },
  plugins: [],
}

