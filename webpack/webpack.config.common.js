'use strict';

const path = require('path');
const webpack = require('webpack');

/**
 * flag Used to check if the environment is production or not
 */
const isProduction = process.argv.indexOf('--mode=production') !== -1;

/**
 * Include hash to filenames for cache busting - only at production
 */
const fileNamePrefix = isProduction? '[chunkhash].' : '';

// Plugins
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: __dirname,
  entry: {
    app: path.resolve(__dirname, '../src/js/app.js'),
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'dist/js/' + fileNamePrefix + '[name].js',
    assetModuleFilename: 'dist/images/[name][ext]',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        type: 'asset/resource',
        exclude: [/images/],
        generator: {
          filename: 'dist/fonts/[name][ext]'
        },
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg)$/,
        type: 'asset/resource',
        exclude: [/webfonts/],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          !isProduction ? 'style-loader' : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ]
  },
	plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../src/images'),
          to: 'dist/images',
          noErrorOnMissing: true
        },
      ],
    }),
    new CleanWebpackPlugin(),
	],
};
