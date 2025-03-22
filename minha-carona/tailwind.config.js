/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
    "./app/**/*.tsx",
  ]
  ,
  theme: {
    extend: {
      fontFamily: {
        principal: ["Montserrat", "sans-serif"],
        secundaria: ["Hanken Grotesk", "sans-serif"],
      },
      fontSize: {
        display: "3rem", // 48px
        titulo_sessao: "2rem", // 32px
        destaque: "1.375rem", // 22px
        paragrafo: "1rem", // 16px
        subtitulo: "1rem", // 16px
      },
    },
  },
  plugins: [],
};
