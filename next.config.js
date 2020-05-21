const optimizedImages = require("next-optimized-images");

const config = {
  // webpack: (config) => {
  //   // config.module.rules.push({
  //   //   test: /\.css$/,
  //   //   use: "raw-loader",
  //   // });
  //   // return config;
  //   config.module.rules.push({
  //     test: /\.css/,
  //     use: ['postcss-loader'],
  //   })
  // },
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: [
  //       {
  //         loader: "@svgr/webpack",
  //         options: {
  //           svgoConfig: {
  //             plugins: {
  //               removeViewBox: false,
  //             },
  //           },
  //         },
  //       },
  //     ],
  //   });
    experimental: {
      async redirects() {
        return [
          {
            source: "/",
            destination: "/tailwind",
            permanent: false,
          },]
    }
  },
};

module.exports = optimizedImages(config);
