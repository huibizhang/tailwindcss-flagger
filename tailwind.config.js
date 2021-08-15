// const colors = require('tailwindcss/colors')
const flagger = require('./flagger')

module.exports = {
  mode: 'jit',
  purge: [
    './docs/index.md',
    './docs/**/*.{md,vue}'
  ],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [
    flagger
  ],
}
