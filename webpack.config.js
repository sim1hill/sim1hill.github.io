var webpack = require('webpack');

module.exports = {
  entry: {
      app: './_js/Application.js'
  },
  watch: false,
  output: {
    filename: "[name].build.js"
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' },
      { test: /\.js$/,  loader: 'jsx-loader' }
    ]
  },
  resolve: {
    extensions: ["",".jsx", ".js"]
  }
};
