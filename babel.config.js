// @ts-check

/**
 * @type {import("@babel/core").ConfigFunction}
 */
const createConfig = (api) => {
  api.cache.forever()
  return {
    plugins: [
      [
        "module-resolver",
        {
          // for absolute path import
          alias: {
            assets: "./assets",
            src: "./src",
          },
        },
      ],
    ],
    presets: ["babel-preset-expo"],
  }
}

module.exports = createConfig
