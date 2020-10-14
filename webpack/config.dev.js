/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const configs = {
  mode: 'development',

  // Add hot reloading in development
  entry: [
    path.join(process.cwd(), 'src/index.jsx'),
  ],

  devtool: 'eval-cheap-source-map',
  // Don't use hashes in dev mode for better performance
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  devServer: {
    contentBase: 'build',
    publicPath: '/',
    port: 3000,
    hot: true,
    historyApiFallback: true,
    open: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
    new HtmlWebpackPlugin({
      title: 'Sample ReactJS Application',
      template: 'src/index.tpl',
      inject: true,
      filename: 'index.html',
    }),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/, // exclude node_modules
      failOnError: false, // show a warning when there is a circular dependency
    }),
  ],

  performance: {
    hints: false,
  },
};

module.exports = require('./config.base')(configs);
