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
        teacher: "#174A7C",
        teacherHover: "#195794",
        student: "#5D895D",
        studentHover: "#3c8e3c",
      }
    },
  },
  plugins: [
  ],
}

