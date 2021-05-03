// tailwind.config.js

const colors = require('tailwindcss/colors');

module.exports = {
    purge: [],
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
    theme: {
        colors: {
            'indigo-lighter': '#b3bcf5',
      'indigo': '#5c6ac4',
      'indigo-dark': '#202e78',
        }
    }
  }