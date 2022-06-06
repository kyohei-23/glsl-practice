const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['index.html','./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': [ 'Noto Serif Display' ,...defaultTheme.fontFamily.serif ]
      }
    },
  },
  plugins: [],
}
