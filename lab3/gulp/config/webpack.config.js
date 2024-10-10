const isBuild = process.argv.includes("--build");
const webpackConfig = {
  mode: isBuild ? "production" : "development",
  entry: {
    script: "./src/js/script.js",
    // '': './src/js/',
  },
  output: {
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};

export { webpackConfig };
