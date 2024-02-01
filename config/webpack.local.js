const path = require('path');
const webpack = require('webpack');
const webpackBaseConfig = require("./webpack.config");
const { merge } = require("webpack-merge");

const defineEnv = require("./defineEnv");
const envKeys = defineEnv("local");

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'eval',
  cache: false,
  optimization: {
    minimize: false,
  },
  devServer: {
    static: { directory: path.resolve(__dirname, '..', './dist') },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: 3002,
  },
  output: {
    publicPath: 'auto',
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': envKeys }),
  ],
});
