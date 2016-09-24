const webpack = require('webpack');
const path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/javascripts');
var APP_DIR = path.resolve(__dirname, 'client');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : [/\.js?/, /\.jsx?/],
        include : APP_DIR,
        loader : 'babel-loader',
        query:
          {
            plugins: ['transform-runtime'],
            presets:['es2015', 'react']
          }
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  }
};

module.exports = config;
