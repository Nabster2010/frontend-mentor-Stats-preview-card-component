module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        accent: "hsl(277, 64%, 61%)",
        card: "hsl(244, 38%, 16%)",
        darkBackground: "hsl(233, 47%, 7%)",
        white: "hsl(0, 0%, 100%)",
        transparentWhite: "hsla(0, 0%, 100%, 0.75)",
        SlightlyTransparentWhite: "hsla(0, 0%, 100%, 0.6)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lexendDeca: ["Lexend Deca", "sans-serif"],
      },
    },
  },
  plugins: [],
};
