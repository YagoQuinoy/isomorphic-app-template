// Libs
import path from 'path';
import webpack from 'webpack';

// Config
import config from './config';

/**
 * Thanks Ambroos!
 * http://stackoverflow.com/questions/37369053/webpack-babel-config-for-both-server-and-client-javascript
 * @type {Object}
 */
const serverConfig = {
  entry: {
    api: path.resolve(__dirname, './src/server/index.js')
  },
  target: 'node',
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: '[name].bundle.js',
    libraryTarget: 'commonjs'
  },
  externals: [/^(?!\.|\/).+/i],
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  }
};

/**
 * Webpack browser configuration. jQuery as vendor.
 * Avoid babelrc due to babel plugin 'css-modules-transform'
 * for css import at server side rendering
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
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        babelrc: false,
        presets: [
          'es2015',
          'react'
        ],
        plugins: [
          'transform-class-properties',
          'transform-object-rest-spread'
        ]
      }
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }, {
        loader: 'postcss-loader'
      }]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true)
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['vendor'],
      filename: 'vendor.js'
    })
  ]
};

if(process.env.NODE_ENV === 'development') {
  const baseUrl = `${config.baseUrl}:${config.webpackDevServerPort}`;
  browserConfig.entry.dev = [`webpack-dev-server/client?${baseUrl}`];
  browserConfig.output.publicPath = `${baseUrl}/static/`;
}

export default [browserConfig, serverConfig];
