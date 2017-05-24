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
  ],
    vendor: [
      'axios',
      'react'
    ]
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
      loader: 'babel-loader'
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
      filename: 'vendor.js',
      minChunks: Infinity
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  performance: {
    hints: 'warning'
  }
}

export default webpackDevConfig


// // Libs
// import { resolve } from 'path'
// import webpack from 'webpack'
// import ExtractTextPlugin from 'extract-text-webpack-plugin'
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
//
// // Config
// import config from '../../config'
//
// const appPath = resolve(__dirname, '../../src/app/index.js')
// const outputPath = resolve(__dirname, '../../assets/')
//
// const baseUrl = `${config.webpackServer.url}:${config.webpackServer.port}`
//
// /**
//  * Webpack browser dev configuration.
//  * @type {Object}
//  */
// const webpackDevConfig = {
//   devtool: 'cheap-module-source-map',
//   target: 'web',
//   entry: {
//     app: [
//       'react-hot-loader/patch',
//       // activate HMR for React
//
//       `webpack-dev-server/client?${baseUrl}`,
//       // bundle the client for webpack-dev-server
//       // and connect to the provided endpoint
//
//       'webpack/hot/only-dev-server',
//       // bundle the client for hot reloading
//       // only- means to only hot reload for successful updates
//
//       appPath
//       // the entry point of our app
//     ],
//     vendor: [
//       'axios',
//       'immutable',
//       'lodash',
//       'react',
//       'react-dom',
//       'react-redux',
//       'react-router',
//       'redux'
//     ]
//   },
//   externals: /node_modules/,
//   output: {
//     path: outputPath,
//     filename: '[name].bundle.js',
//     publicPath: `${baseUrl}/assets/`
//   },
//   resolve: {
//     extensions: ['.js', '.jsx']
//   },
//   module: {
//     rules: [{
//       test: /\.jsx?$/,
//       exclude: /node_modules/,
//       loader: 'babel-loader'
//     }, {
//       test: /\.css$/,
//       use: [{
//         loader: 'style-loader'
//       }, {
//         loader: 'css-loader',
//         options: {
//           sourceMap: true,
//           modules: true, // Enable CSS modules
//           importLoaders: 1, // Number of loaders before css-loaders
//           localIdentName: '[name]__[local]___[hash:base64:5]'
//         }
//       }, {
//         loader: 'postcss-loader'
//       }]
//     }, {
//       test: /\.(png|jpg)$/,
//       loader: 'file-loader?name=[name].[ext]&outputPath=img/'
//     }]
//   },
//   plugins: [
//     new ExtractTextPlugin('styles.css'),
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: JSON.stringify(config.env)
//       }
//     }),
//     new webpack.optimize.CommonsChunkPlugin({
//       name: 'vendor',
//       chunks: ['vendor'],
//       filename: 'vendor.js',
//       minChunks: Infinity
//     }),
//     new webpack.HotModuleReplacementPlugin()
//   ],
//   performance: {
//     hints: 'warning'
//   }
// }
//
// export default webpackDevConfig
