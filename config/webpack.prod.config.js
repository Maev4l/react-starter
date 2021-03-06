/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const common = require('./webpack.common.config.js');

const ROOT_DIR = path.resolve(__dirname, '../');
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');
const cleanWebpackPluginConfig = new CleanWebpackPlugin([DIST_DIR], {
  root: ROOT_DIR,
  verbose: true,
});

module.exports = (env) =>
  merge(common, {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
      minimizer: [
        new UglifyJSPlugin({
          sourceMap: true,
          uglifyOptions: {
            compress: {
              inline: false,
            },
          },
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],

      splitChunks: {
        chunks: 'all',
      },
    },
    plugins: [
      cleanWebpackPluginConfig,
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env.mode),
      }),
    ],
  });
