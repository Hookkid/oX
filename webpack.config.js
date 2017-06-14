var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: './dist/bundle.js',
    path: __dirname
  },
 module: {
  loaders: [
    {
      loader: "babel-loader",
      exclude: /(node_modules|bower_components)/,
      test: /\.jsx?$/
    }
  ]
},

node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }

};