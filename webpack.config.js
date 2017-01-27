const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const packageData = require('./package.json');

var filename = [packageData.name, packageData.version, 'js'];

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = [{
    context: __dirname + '/client',
    entry: path.resolve(__dirname, packageData.main),
    output: {
       path: path.resolve(__dirname, 'build'),
       filename: filename.join('.'),
   },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
},
{
    context: __dirname + '/server',
    entry: './server.js',
    output: {
    path: __dirname + '/build/server',
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  devtool: 'source-map',
  module: {
      loaders: [
          {
              test: /\.js$/,
              exclude: /(node_modules)/,
              loader: 'babel-loader',
              query: {
                  presets: ['es2015', 'react', 'stage-0']
              }
          }
      ]
  },
  target: 'node',
  externals: nodeModules
}];
