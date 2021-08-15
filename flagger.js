const _ = require('lodash')
const plugin = require('tailwindcss/plugin')

const flagger = plugin(
  function ({ addUtilities, theme, e, addVariant, config }) {
    const flagUtilities = _.map(theme('flag'), (value, key) => {
      return {
        [`.${e(`flag-${key}`)}`]: {},
      }
    })
    addUtilities(flagUtilities)

    const prevarient = ['checked', 'hover', 'active', 'disabled', 'focus']
    _.map(theme('flag'), (value, key) => {
      prevarient.forEach((variant) => {
        addVariant(`flag-${key}-${variant}`, ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return (
              `.flag-${key}:${variant} ~ .${e(`flag-${key}-${variant}${separator}${className}`)},\n` +
              `.flag-${key}:${variant} ~ * .${e(`flag-${key}-${variant}${separator}${className}`)}`
            )
          })
        })
      })
    })
  },
  {
    theme: {
      flag: {
        1: '1',
        2: '2',
        3: '3',
      },
    }
  }
)

module.exports = flagger