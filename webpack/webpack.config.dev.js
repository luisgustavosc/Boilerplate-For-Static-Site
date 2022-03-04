'use strict';

const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, '../build'),
    },
    historyApiFallback: true,
    host: "0.0.0.0",
    hot: true,
    compress: true,
    port: 80,
  }
});
