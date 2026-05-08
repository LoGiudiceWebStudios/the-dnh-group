const defaultConfig = require("@wordpress/scripts/config/webpack.config");

module.exports = {
  ...defaultConfig,
  entry: {
    index: "./src/index.js",
    "blocks/block-1": "./src/blocks/block-1/index.js",
    "blocks/block-2": "./src/blocks/block-2/index.js",
    "blocks/block-3": "./src/blocks/block-3/index.js",
    "blocks/block-4": "./src/blocks/block-4/index.js",
    "blocks/block-5": "./src/blocks/block-5/index.js",
    "blocks/block-6": "./src/blocks/block-6/index.js",
    "blocks/block-7": "./src/blocks/block-7/index.js",
    "blocks/block-8": "./src/blocks/block-8/index.js",
    "blocks/block-9": "./src/blocks/block-9/index.js",
    "blocks/block-10": "./src/blocks/block-10/index.js",
    "blocks/block-11": "./src/blocks/block-11/index.js",
    "blocks/block-12": "./src/blocks/block-12/index.js",
    "blocks/block-13": "./src/blocks/block-13/index.js",
    "blocks/block-14": "./src/blocks/block-14/index.js",
    "blocks/block-15": "./src/blocks/block-15/index.js",
    "blocks/block-16": "./src/blocks/block-16/index.js",
    "blocks/block-17": "./src/blocks/block-17/index.js",
  },

  output: {
    path: __dirname + "/build",
    filename: "[name].js",
  },
};
