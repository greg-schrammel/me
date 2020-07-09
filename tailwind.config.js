module.exports = {
  purge: ["./**/*.jsx"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      cursive: ["Nanum Pen Script"],
      mono:
        "Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif",
    },
    extend: {
      colors: {
        tailwind: "#16bdca",
        close: "rgb(255,95,86)",
        minimize: "rgb(255,189,46)",
        maximize: "rgb(39,201,63)",
        gray: {
          "900": "#f5f5f5",
          "800": "#dddddd",
          "700": "#bbbbbb",
          "600": "#999999",
          "500": "#777777",
          "400": "#555555",
          "300": "#333333",
          "200": "#181818",
          "100": "#0D0D0D",
        },
      },
      fontSize: {
        hero: "6rem",
      },
      boxShadow: {
        lg: "0 3px 20px -3px rgba(0,0,0,.1)",
        code: "0 3px 13px -3px black",
      },
      borderRadius: {
        xl: "20px",
        iphone: "2.3rem",
      },
      rotate: {
        "3": "3deg",
      },
    },
    variants: {
      fontSize: ["responsive"],
      padding: ["responsive"],
      textAlign: ["responsive"],
    },
  },
};
