// Libs
import { resolve } from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

// Config
import config from '../../config'

const appPath = resolve(__dirname, '../../src/app/index.js')
const outputPath = resolve(__dirname, '../../public/')

const baseUrl = `${config.webpackServer.url}:${config.webpackServer.port}`

/**
 * Webpack browser dev configuration.
 * @type {Object}
 */
const webpackDevConfig = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      // activate HMR for React

      `webpack-dev-server/client?${baseUrl}`,
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint

      'webpack/hot/only-dev-server',
      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates

      appPath
      // the entry point of our app
    ]
  },
  output: {
    path: outputPath,
    filename: '[name].bundle.js',
    publicPath: `${baseUrl}/public/`
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        babelrc: false, // Can't set these in baberc file without provoking webpack.server.js break due to modules: false
        presets: [
          ['es2015', { 'modules': false }],
          'react'
        ],
        plugins: [
          'transform-class-properties',
          'transform-object-rest-spread',
          'react-hot-loader/babel'
        ]
      }
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          modules: true, // Enable CSS modules
          importLoaders: 1, // Number of loaders before css-loaders
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }, {
        loader: 'postcss-loader'
      }]
    }, {
      test: /\.(png|jpg)$/,
      loader: 'file-loader',
      query: {
        name: 'img/[name].[sha512:hash:base64:7].[ext]',
        useRelativePath: true
      }
    }
    // , {
    //   test: /favicon\.ico$/,
    //   loader: 'url-loader',
    //   query: {
    //     limit: 1,
    //     name: '[name].[ext]'
    //   }
    // }
  ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(config.env)
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}

export default webpackDevConfig
