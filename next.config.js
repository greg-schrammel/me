const withImages = require("next-images");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withImages({
  // pageExtensions: ["jsx", "mdx"],
});
