const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        battambang: ['Battambang', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'magenta': '#993957',
        'medium-pink': '#c45a7b',
        'light-pink': '#cf7691',
        'primary-blue': '#4d869e',
        'medium-blue': '#3e6778',
        'light-blue': '#76a2b5',
        'main-bg': '#f4ebcf'
      },
      textShadow: {
        sm: '0 1px 2px rgb(0 0 0/ 10%)',
        DEFAULT: '0 2px 4px rgb(0 0 0/ 20%)',
        lg: '0 8px 16px rgb(0 0 0/ 20%)',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}