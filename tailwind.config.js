/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"]
      },
      screens: {
        "2xl": "1328px"
      }
    },
  },
  plugins: [],
}

