/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const pkg = require('../package.json');

const ROOT_DIR = path.resolve(__dirname, '../');
const SRC_DIR = path.resolve(ROOT_DIR, 'src');
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');
const PUBLIC_DIR = path.resolve(ROOT_DIR, 'public');

const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(PUBLIC_DIR, 'index.html'),
  filename: 'index.html',
  inject: 'body',
  hash: true,
});

const copyWebPackPluginConfig = new CopyWebpackPlugin([
  {
    from: path.join(PUBLIC_DIR, 'error.html'),
    to: DIST_DIR,
    toType: 'dir',
  },
]);

const plugins = [htmlWebpackPluginConfig, copyWebPackPluginConfig];

module.exports = {
  entry: {
    main: path.join(SRC_DIR, 'index.js'),
    vendor: Object.keys(pkg.dependencies),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      /** ==> For all .css files in node_modules */
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          // { loader: 'css-loader', options: { camelCase: true } },
        ],
      },
      /** <== For all .css files in node_modules */
      {
        test: /\.png$/,
        loader: 'url-loader?limit=100000&mimetype=image/png',
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader',
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins,
};
