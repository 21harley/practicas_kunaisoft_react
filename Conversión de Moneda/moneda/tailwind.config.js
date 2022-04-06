/* eslint-disable no-undef */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#7B7B7B',
      black2: '#0A121E',
      yellow: '#FDAF02',
      yellow1: '#FA7D09',
      yellow2: '#FF4301',
      white: '#FFFFFF',
      modal: 'rgba(10, 18, 30, 0.38)',
      red: 'rgb(254 202 202)',
      blackRed: 'rgb(185 28 28)',
      lima: 'rgb(217 249 157)',
      blackLima: 'rgb(132 204 22)'
    },
    extend: {
      fontFamily: {
        'press-start': ['Jura', 'cursive']
      }
    }
  },
  plugins: []
}
