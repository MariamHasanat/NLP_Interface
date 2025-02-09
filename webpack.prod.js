const path = require('path');
const { mode } = require('./webpack.dev');

module.exports = {
  entry: './path/to/my/entry/file.js',
  mode: "production",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },
};