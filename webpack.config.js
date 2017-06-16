var path = require("path");

module.exports = {
  entry: "./app/index.js",
  output: {
    filename: "./dist/bundle.js",
    path: __dirname
  },
 module: {
  rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader/url" },
          { loader: "file-loader" }
        ]
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" }
          ]
      },
      { 
        test: /\.png$/, 
        use: [ { loader: "url-loader?limit=100000" } ]
      },
      { 
        test: /\.jpg$/, 
        use: [ { loader: "file-loader" } ] 
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
        use: [ { loader: "url?limit=10000&mimetype=application/font-woff" } ]
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        use: [ { loader: "url?limit=10000&mimetype=application/octet-stream" } ]
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        use: [ { loader: "file" } ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
        use: [ { loader: "url?limit=10000&mimetype=image/svg+xml" } ]
      },
      {
        test: /\.jsx?$/,
        use: [ { loader: "babel-loader" } ],
        exclude: /(node_modules|bower_components)/
        
      }
    ]
},

node: {
  console: true,
  fs: "empty",
  net: "empty",
  tls: "empty"
}

};