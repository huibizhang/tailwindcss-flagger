const _ = require('lodash')
const plugin = require('tailwindcss/plugin')

const flagger = plugin(
  ({ addUtilities, theme, addVariant }) => {
    const pairUtilities = Object.keys(theme('pair', {}))
    pairUtilities.forEach((key) => {
      addUtilities({
        [`.pair-${key}`]: {},
      })
    })

    let pseudoVariants = [
      // Positional
      ['first', ':first-child'],
      ['last', ':last-child'],
      ['only', ':only-child'],
      ['odd', ':nth-child(odd)'],
      ['even', ':nth-child(even)'],
      'first-of-type',
      'last-of-type',
      'only-of-type',

      // State
      [
        'visited',
        ({ container }) => {
          let toRemove = ['--tw-text-opacity', '--tw-border-opacity', '--tw-bg-opacity']

          container.walkDecls((decl) => {
            if (toRemove.includes(decl.prop)) {
              decl.remove()

              return
            }

            for (const varName of toRemove) {
              if (decl.value.includes(`/ var(${varName})`)) {
                decl.value = decl.value.replace(`/ var(${varName})`, '')
              }
            }
          })

          return ':visited'
        },
      ],
      'target',
      ['open', '[open]'],

      // Forms
      'default',
      'checked',
      'indeterminate',
      'placeholder-shown',
      'autofill',
      'required',
      'valid',
      'invalid',
      'in-range',
      'out-of-range',
      'read-only',

      // Content
      'empty',

      // Interactive
      'focus-within',
      'hover',
      'focus',
      'focus-visible',
      'active',
      'disabled',
    ].map((variant) => (Array.isArray(variant) ? variant : [variant, `:${variant}`]))

    for (let [variantName, state] of pseudoVariants) {
      Object.keys(theme('pair', {})).forEach((key) => {
        addVariant(`pair-${key}-${variantName}`, ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return (
              `.pair-${key}${state} ~ .pair-${key}-${variantName}\\${separator}${className},\n` +
              `.pair-${key}${state} ~ * .pair-${key}-${variantName}\\${separator}${className}`
            )
          })
        })
      })
    }
  },
  {
    theme: {
      pair: {
        1: 1,
        2: 2,
        3: 3,
      },
    },
  }
)

module.exports = flagger