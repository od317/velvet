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
      dark2:'#191919',
      light1:'#47A992',
      light2:'#EEEEEE',
      light3:'#fefefe',
      text1:'#ffffff',
      white:'#ffffff',
      black:'#000000',
      gray:'#616161',
      blue:'#0985de',
      pink:'#e009b2',
      red:'#de0707',
      lightGreen:'#27d117',
      yellow:'#d4ca0f',
      purple:'#9b0ac7',
      cream:'#FFFDD0',
    }
    ,
    extend: {

    },
  },
  plugins: [],
}

