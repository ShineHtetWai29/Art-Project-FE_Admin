/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '1271': '1271px',
        '580' : '580px',
        '500' : '500px',
        '1010' : '1010px',
        '300' : '300px',
      },

      height:{
        '394' : '394px',
         '190' : '190px',
         '445' : '445px',
      },
      
      fontFamily: {
        'muli':['Mulish','sans-serif'],
        'robotoSlap' : ['Roboto Slab','sans-serif'],
        'stardos' : ['Stardos Stencil','sans-serif'],
        'inter' : ['Inter','sans-serif'],


      },
      colors : {
        'primary' : '#637A9F',
        'secondary' : '#F0EDCF',
        'card' : '#B5C0D0',
        'success' : '#25AC0F',
        'blood' : '#e71b18'
      }
      
    },
  },
  plugins: [],
}

