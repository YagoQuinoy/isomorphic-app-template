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
    vendor: ['jquery']
  },
  output: {
    path: path.resolve(__dirname, './static/'),
    filename: '[name].bundle.js'
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

if(process.env.NODE_ENV === 'development') {
  browserConfig.entry.dev = ['webpack-dev-server/client?http://localhost:3001'];
  browserConfig.output.publicPath = 'http://localhost:3001/static/';
}

module.exports = [browserConfig, serverConfig];
