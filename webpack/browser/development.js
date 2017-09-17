// Libs
import { resolve } from 'path'
import webpack from 'webpack'
import CopyWebpackPlugin from 'copy-webpack-plugin'

// Config
import config from '../../config'

const rootPath = resolve(__dirname, '../../')
const appPath = `${rootPath}/src/app/`
const outputPath = `${rootPath}/public/`

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
      `${appPath}/index.js`
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
          localIdentName: '[name]__[local]___[hash:base64:5]',
          alias: {
            Assets: `${rootPath}/assets/`
          }
        }
      }, {
        loader: 'postcss-loader'
      }]
    }, {
      test: /\.(png|jpg)$/, // TODO: Revisar tema imágenes
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'img/'
      }
    }, {
      test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'fonts/'
      }
    }]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: `${rootPath}/assets/favicon.ico`,
      to: `${rootPath}/public`
    }]),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(config.env)
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}

export default webpackDevConfig
