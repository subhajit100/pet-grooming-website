/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
  theme: {
    screens: {
        'xs': '400px',
        ...defaultTheme.screens,
      },
    extend: {},
  },
  plugins: [],
}

