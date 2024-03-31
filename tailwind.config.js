/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./Quizz/src/**/*.{html,js}","./ClickIt/src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
      "brand-100":"#5CA8A3",
      "brand-200":"#EB6A48",
      "brand-300":"#2c8e8d",
      "brand-400":"#43776B",
      "brand-500":"#cf7d61"
     }
    },
  },
  plugins: [],
}

