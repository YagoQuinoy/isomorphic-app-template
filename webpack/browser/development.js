// Libs
import { resolve } from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

// Config
import config from '../../config'

const appPath = resolve(__dirname, '../../src/app/index.js')
const outputPath = resolve(__dirname, '../../assets/')

const baseUrl = `${config.webpackServer.url}:${config.webpackServer.port}`

/**
 * Webpack browser configuration. jQuery as vendor.
 * Avoid babelrc due to babel plugin 'css-modules-transform'
 * for css import at server side rendering
 * @type {Object}
 */
export default {
  devtool: 'inline-source-map',
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
  ],
    vendor: ['react']
  },
  output: {
    path: outputPath,
    filename: '[name].bundle.js',
    publicPath: `${baseUrl}/assets/`
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        babelrc: false,
        presets: [
          ['es2015', {'modules': false}],
          'react'
        ],
        plugins: [
          'transform-class-properties',
          'transform-object-rest-spread'
        ]
      }
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        //resolve-url-loader may be chained before sass-loader if necessary
        use: [{
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
      })
    }, {
      test: /\.(png|jpg)$/,
      loader: 'file-loader?name=[name].[ext]&outputPath=img/'
    }]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(config.env)
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['vendor'],
      filename: 'vendor.js'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}