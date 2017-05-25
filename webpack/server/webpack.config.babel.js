// Libs
import path from 'path'



/**
 * For bundle server code. Production only.
 *
 * Thanks Ambroos!
 * http://stackoverflow.com/questions/37369053/webpack-babel-config-for-both-server-and-client-javascript
 * @type {Object}
 */
export default {
  entry: {
    api: path.resolve(__dirname, '../../src/server/index.js')
  },
  target: 'node',
  node: {
    __dirname: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, '../../dist/'),
    filename: '[name].bundle.js',
    libraryTarget: 'commonjs'
  },
  externals: [/^(?!\.|\/).+/i],
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader'
    }, {
      test: /\.(jpg|png|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[path][name].[hash].[ext]'
      }
    }]
  }
}
