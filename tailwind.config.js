/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    screens: {
      'phone': '450px',
      'navmid':'860px',
      'mid':'800px',
      'ms':'720px'
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
      light4:'#dbdbdb',
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
      gray2:'#e4e4e4',
      gray3:'#9c9c9c',
      gray4:'#f5f2f2',
      gray5:'#979999',
      priceColor:'#fc1c03'
    }
    ,
    extend: {

    },
  },
  plugins: [],
}

