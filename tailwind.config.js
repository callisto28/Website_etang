// tailwind.config.js

const colors = require('tailwindcss/colors');

module.exports = {
     purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'media', // or 'media' or 'class'
    variants: {
      extend: {},
    },
    textColor:{
      blanc: colors.white
    },
    plugins: [],
    theme:{
      colors: {
      blanc: colors.blueGray,
      gray: colors.coolGray,
      black: colors.black,
      bleu: colors.cyan
        }
    }
  }