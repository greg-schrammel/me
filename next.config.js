const optimizedImages = require("next-optimized-images");

const config = {
  optimizeImages: false,
  experimental: {
    async redirects() {
      return [
        {
          source: "/",
          destination: "/portfolio",
          permanent: false,
        },
      ];
    },
  },
};

module.exports = optimizedImages(config);
