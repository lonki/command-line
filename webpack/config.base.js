const path = require('path');
const webpack = require('webpack');

const DEFAULT_OUTPUT = {
  path: path.resolve(process.cwd(), 'build'),
  publicPath: '/',
};

module.exports = (options) => ({
  mode: options.mode,
  entry: options.entry,
  output: Object.assign(DEFAULT_OUTPUT, options.output),
  module: {
    rules: [{
      test: /\.(js|jsx)$/, // Transform all .js files required somewhere with Babel
      loader: 'babel-loader',
      exclude: /node_modules/,
      resolve: {
        extensions: ['.js', '.jsx'],
      },
    }, {
      test: /\.css$/,
      include: [
        /sanitize.css/,
        /app/,
      ],
      loaders: ['style-loader', 'css-loader'],
    }, {
      test: /\.(eot|svg|ttf|woff|woff2|jpg|png|gif|ico)$/,
      loader: 'file-loader',
    }],
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx'],
  },
  plugins: options.plugins.concat([
    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; Terser will automatically
    // drop any unreachable code.
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    }),
  ]),
  devtool: options.devtool,
  target: 'web', // Make web variables accessible to webpack, e.g. window
  performance: options.performance || {},
  optimization: options.optimization,
  devServer: options.devServer,
});
