const { merge } = require('webpack-merge');
const WebpackConfigTerra = require('@cerner/webpack-config-terra');
const path = require('path');

const repoConfig = () => ({
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'lib'),
  },
});

const mergedConfig = (env, argv) => (
  merge(WebpackConfigTerra(env, argv), repoConfig())
);

module.exports = mergedConfig;
