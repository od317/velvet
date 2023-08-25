/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    screens: {
      'phone': '450px',
    },
    fontFamily: {
      
      'Lato': ['"Lato"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },
    colors: {
      p1:'#fdfffe',
      dark1:'#95BDFF',
      light1:'#47A992',
      light2:'#EEEEEE',
      light3:'#fefefe',
      text1:'#ffffff',
      white:'#ffffff',
      black:'#000000',
      gray:'#616161'
    }
    ,
    extend: {

    },
  },
  plugins: [],
}

