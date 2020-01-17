/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const { colors } = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    extend: {
      colors: {
        'super-red': '#900',
        indigo: '#5c6ac4',
        blue: {
          ...colors.blue,
          100: '#c4d0ff',
          800: '#25a',
        },
        red: '#de3618',
        'mary-green': '#018c79',
      },
      container: {
        center: true,
        padding: '.5em',
      },
    },
  },
  variants: {},
  plugins: [],
}
