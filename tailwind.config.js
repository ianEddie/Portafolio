/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        main: '#f8f1d7'
      },
      backgroundImage: {
        primaryImage: "url('https://i.postimg.cc/tJmZ2S7L/bg.png')"
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
