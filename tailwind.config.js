/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      borderRadius: {
        custom: '2em'
      },
      gridRowEnd: {
        9: '9',
        10: '10',
        12: '12'
      },
      gridRow: {
        'span-11': 'span 11 / span 11'
      },
      colors: {
        main: '#f8f1d7'
      },
      backdropBrightness: {
        custom: '0.7'
      },
      backgroundImage: {
        hero: "url('https://i.postimg.cc/tJmZ2S7L/bg.png')"
      },
      fontFamily: {
        primary: ' Bruno Ace, cursive',
        secondary: 'Bruno Ace SC'
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true })
  ]
}
