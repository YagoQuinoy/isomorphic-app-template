// Libs
import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

// Config
import config from '../../config'

const appPath = path.resolve(__dirname, '../../src/app/index.js')
const outputPath = path.resolve(__dirname, '../../assets/')

/**
 * Webpack browser configuration. jQuery as vendor.
 * Avoid babelrc due to babel plugin 'css-modules-transform'
 * for css import at server side rendering
 * @type {Object}
 */
export default {
  entry: {
    app: appPath,
    vendor: ['react']
  },
  output: {
    path: outputPath,
    filename: '[name].bundle.js',
    publicPath: `${config.server.url}:${config.server.port}/assets/`
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
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['vendor'],
      filename: 'vendor.js'
    })
  ]
}
