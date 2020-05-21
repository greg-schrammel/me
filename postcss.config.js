const purgecss = {
  "@fullhuman/postcss-purgecss": {
    content: ["./components/**/*.jsx", "./pages/**/*.jsx"],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
};

module.exports = {
  plugins: {
    tailwindcss: {},
    // "postcss-import",
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production" ? purgecss : {}),
  },
};
