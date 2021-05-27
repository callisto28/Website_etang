// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
      xl: '1281px'
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      philosopher:['philosopher', 'sans-serif']
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '40rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        'frost': {
          'start': '#000428',
          'end': '#004e92',
        },
        'green': {
          'start': '##D3CCE3',          
          'end': '#E9E4F0',
        }
      }
    },
  
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
}