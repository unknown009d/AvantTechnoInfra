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
      },
      colors: {
        pmblue: "#0060BF",
        pmgreen: "#ABD9C7",
        tgreen: "#44695A",
        btnSend: "#2C9777"
      },
      boxShadow:{
        lightShadow: "0 32px 100px -17px rgba(0,0,0,0.05)",
        formc: "-28px -65px 193px -18px rgba(0,0,0,0.06)",
      }
    },
  },
  plugins: [],
}

