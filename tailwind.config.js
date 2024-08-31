/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        save:'#3795BD',
        google:'#E69500',
        facebook:'#4267B2',
        buget:'#FEF4F3',
        body:'#E5E5E5',
        primary:'#E23E3E',
        secondary:'#a52b2b'
      },
      fontFamily:{
        poppins: 'poppins',
        roboto : 'roboto'
      },
      borderRadius:{
        recipe : '2.0rem'
      },
    },
  },
  plugins: [],
}

