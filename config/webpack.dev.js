const path = require("path");
const webpack = require("webpack");
const webpackBaseConfig = require("./webpack.config");
const { merge } = require("webpack-merge");

const defineEnv = require("./defineEnv");
const envKeys = defineEnv("dev");

module.exports = merge(webpackBaseConfig, {
  mode: "development",
  devtool: "eval",
  cache: false,
  optimization: {
    minimize: false,
  },
  devServer: {
    static: { directory: path.resolve(__dirname, "..", "./dist") },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    port: 3002,
  },
  output: {
    path: path.resolve(__dirname, "..", "./dist"),
    filename: "bundle.[fullhash].js",
    chunkFilename: "[name].chunk.js",
    publicPath: "auto",
  },
  plugins: [
    new webpack.DefinePlugin({ "process.env": envKeys }),
  ],
});
