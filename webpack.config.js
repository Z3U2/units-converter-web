'use-strict'
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry : './app.js',
  output : {
    path : path.resolve(__dirname,'dist'),
    filename : 'bundle.js'
  },
  plugins : [
    new webpack.ProvidePlugin({
      jquery: 'jquery',
      jQuery: 'jquery',
      $: 'jquery'
    })
  ]
};
