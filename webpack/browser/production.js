// Libs
import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

// Config
import config from '../../config'

const appPath = path.resolve(__dirname, '../../src/app/index.js')
const outputPath = path.resolve(__dirname, '../../public/')

/**
 * Webpack browser production configuration.
 * @type {Object}
 */
const webpackProConfig = {
  entry: {
    vendor: [
      'axios',
      'immutable',
      'lodash',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-dom',
      'redux',
      'redux-logger'
    ],
    app: appPath
  },
  output: {
    path: outputPath,
    filename: '[name].bundle.js',
    publicPath: `${config.server.url}:${config.server.port}/public/`
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader', //resolve-url-loader may be chained before sass-loader if necessary
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
      test: /\.(png|jpg)$/, // TODO: Revisar tema imágenes
      loader: 'file-loader?name=[name].[ext]&outputPath=img/'
    },{
      test: /favicon\.ico$/,
      loader: 'url-loader',
      query: {
        limit: 1,
        name: '[name].[ext]'
      }
    }
  ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    // new webpack.optimize.UglifyJsPlugin(),
    // new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    })
    // , new ChunkManifestPlugin({})
  ],
  performance: {
    hints: 'warning'
  }
}

if (true) {
  webpackProConfig.plugins.push(new BundleAnalyzerPlugin({
    analyzerMode: 'static'
  }))
}

export default webpackProConfig
