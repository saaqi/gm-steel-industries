// const autoprefixer = require("autoprefixer");
// const cssnano = require('cssnano');
// const purgecss = require("@fullhuman/postcss-purgecss");
const IN_PRODUCTION = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    IN_PRODUCTION &&
      require("@fullhuman/postcss-purgecss")({
        content: [
          `index.html`,
          `./src/**/*.js`
        ],
        defaultExtractor(content) {
          const contentWithoutStyleBlocks = content.replace(
            /<style[^]+?<\/style>/gi,
            ""
          );
          return (
            contentWithoutStyleBlocks.match(
              /[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g
            ) || []
          );
        },
        // safelist: [
        //   /-(leave|enter|appear)(|-(to|from|active))$/,
        //   /^(?!(|.*?:)cursor-move).+-move$/,
        //   /^router-link(|-exact)-active$/,
        //   /data-v-.*/,
        // ],
      }),

    IN_PRODUCTION && require("autoprefixer"),

    IN_PRODUCTION &&
      require("cssnano")({
        preset: ["default", { discardComments: { removeAll: true } }],
      }),
  ],
};
