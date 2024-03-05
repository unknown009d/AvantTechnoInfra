/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['"Inter"', 'sans-serif'],
      serif: ['"Playfair Display"', 'serif'],
    },
    extend: {
      screens: {
        'xss': '420px',
        'xs': '540px'
      }
    },
  },
  plugins: [],
}

