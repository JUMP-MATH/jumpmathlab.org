/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./public/index.html"
  ],
  theme: {
    fontFamily: {
      /*sans: ["NotoSans-Regular", "Figtree", ...defaultTheme.fontFamily.sans,],
      sansBold: ['NotoSans-Bold'],
      sansSemiBold: ['NotoSans-SemiBold']*/
      sans: ['Noto Sans', "Figtree", ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        home: "#F9F9FA",
        text: "#454448",
        canada: "#DC3545",
        canadaHover: "#ec5b69",
        usa: "#174A7C",
        usaHover: "#3a76b1",
        disabled: "#E8E8E8"
      }
    },
  },
  plugins: [
  ],
}

