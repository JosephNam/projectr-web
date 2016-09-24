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
        loader : 'babel',
        query:
          {
            presets:['react']
          }
      }
    ]
  }
};

module.exports = config;
