/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        "home": "url('/assets/bg2.png')"
      },

      screens:{
        lg: '1000px'
      }
    },
  },
  plugins: [],
}

