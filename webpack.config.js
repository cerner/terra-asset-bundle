const { merge } = require('webpack-merge');
const WebpackConfigTerra = require('@cerner/webpack-config-terra');
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const repoConfig = () => ({
  entry: './src/index.js',
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1, // disable creating additional chunks
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
      chunkFilename: 'main.css',
      ignoreOrder: true,
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'lib'),
  },
});

const mergedConfig = (env, argv) => (
  merge(WebpackConfigTerra(env, argv), repoConfig())
);

module.exports = mergedConfig;
