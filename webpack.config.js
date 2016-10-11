// Libs
var path = require('path');
var webpack = require('webpack');

/**
 * Thanks Ambroos!
 * http://stackoverflow.com/questions/37369053/webpack-babel-config-for-both-server-and-client-javascript
 * @type {Object}
 */
const serverConfig = {
  entry: {
    api: path.resolve(__dirname, './src/api/server.js')
  },
  target: 'node',
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: '[name].bundle.js',
    libraryTarget: 'commonjs'
  },
  externals: [/^(?!\.|\/).+/i, ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  }
};

/**
 * Webpack browser configuration. jQuery as vendor.
 * @type {Object}
 */
const browserConfig = {
  entry: {
    app: path.resolve(__dirname, './src/app.js'),
    vendor: ['jquery'],
    dev: ['webpack-dev-server/client?http://localhost:3001']
  },
  output: {
    path: path.resolve(__dirname, './static/'),
    filename: '[name].bundle.js',
    publicPath: 'http://localhost:3001/static/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['vendor'],
      filename: 'vendor.js'
    })
  ]
};

// config.entry.dev = [
//   'webpack-dev-server/client?http://localhost:3001',
//   'webpack/hot/only-dev-server',
// ];

module.exports = [browserConfig, serverConfig];
