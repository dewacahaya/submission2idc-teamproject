/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"]
      },
      colors: {
        button: ["#F8B319"],
        bgweb: ["#000000"],
        searchbar: ["#21242D"],
        fontwhite: ["#FCFDFD"]
      },
      screens: {
        "2xl": "1328px"
      }
    },
  },
  plugins: [],
}

