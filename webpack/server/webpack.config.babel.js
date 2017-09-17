// Libs
import { resolve } from 'path'

const rootPath = resolve(__dirname, '../../')

/**
 * For bundle server code. Production only.
 *
 * Thanks Ambroos!
 * http://stackoverflow.com/questions/37369053/webpack-babel-config-for-both-server-and-client-javascript
 * @type {Object}
 */
export default {
  entry: {
    api: `${rootPath}/src/server/index.js`
  },
  target: 'node',
  node: {
    __dirname: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: `${rootPath}/dist/`,
    filename: '[name].bundle.js',
    libraryTarget: 'commonjs'
  },
  externals: [/^(?!\.|\/).+/i], // Bundle only relative paths
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[sha512:hash:base64:7].[ext]',
        outputPath: 'img/',
        emitFile: false
      }
    }, {
      test: /favicon.ico$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        emitFile: false
      }
    }]
  }
}
