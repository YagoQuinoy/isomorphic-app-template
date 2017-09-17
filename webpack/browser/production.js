// Libs
import { resolve } from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import CopyWebpackPlugin from 'copy-webpack-plugin'

// Config
import config from '../../config'

const rootPath = resolve(__dirname, '../../')
const appPath = resolve(__dirname, '../../src/app/')
const outputPath = resolve(__dirname, '../../public/')

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
    app: `${appPath}/index.js`
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
            localIdentName: '[name]__[local]___[hash:base64:5]',
            alias: {
              'Assets': `${rootPath}/assets/`
            }
          }
        }, {
          loader: 'postcss-loader'
        }]
      })
    }, {
      test: /\.(png|jpg)$/, // TODO: Revisar tema imágenes
      loader: 'file-loader?name=&outputPath=img/&useRelativePath=true',
      options: {
        name: '[name].[sha512:hash:base64:7].[ext]',
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
    new ExtractTextPlugin('styles.css'),
    new CopyWebpackPlugin([{
      from: `${rootPath}/assets/favicon.ico`,
      to: `${rootPath}/public`
    }]),
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

if(true) {
  webpackProConfig.plugins.push(new BundleAnalyzerPlugin({
    analyzerMode: 'disabled'
  }))
}

export default webpackProConfig
