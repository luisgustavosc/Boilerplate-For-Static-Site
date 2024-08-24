'use strict';

const { merge } = require('webpack-merge');
const common = require('./webpack.config.common.js');

// Plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    ],
  },
	performance: {
    maxAssetSize: 350_000,
    maxEntrypointSize: 350_000,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'dist/css/[contenthash].[name].css',
    }),
  ],
});
