'use strict';

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: ["./web/static/js/app.js", "./web/static/css/app.css"],
  output: {
    path: "./priv/static",
    filename: "js/app.js"
  },

  resolve: {
    moduleDirectories: [ __dirname + "/web/static/js" ],
    alias: {
      phoenix:
        __dirname + "/deps/phoenix/web/static/js/phoenix.js"
    }
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel",
      query: {
        presets: ["react", "es2015"]
      }
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("css")
    }]
  },

  plugins: [
    new ExtractTextPlugin("css/app.css"),
    new CopyWebpackPlugin([
      { from: "./web/static/assets" },
      { from: "./deps/phoenix_html/web/static/js/phoenix_html.js",
        to: "js/phoenix_html.js" }
    ])
  ]
};
