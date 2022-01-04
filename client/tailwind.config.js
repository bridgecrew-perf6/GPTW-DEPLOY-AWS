module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#1b174a",
        background: "#f4f5fc",
        primaryDark: "#1d1e42",
        secondaryDark: "#141432",
        darkBtn: "#524fed",
        darkSelect: "#26264f",
      },
    },
    backgroundImage: {
      cover: "url('/src/assets/img/Faqcover.png')",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
