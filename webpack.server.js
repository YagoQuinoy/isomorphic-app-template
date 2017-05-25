// Libs
import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import bunyan from 'bunyan'

// App config
import config from './config'

// Webpack config
import browserConfig from './webpack/browser/webpack.config.babel'

const logger = bunyan.createLogger({
  name: 'webpackDevServer',
  stream: process.stdout
})

new WebpackDevServer(webpack(browserConfig), {
  compress: true,
  headers: { 'Access-Control-Allow-Origin': '*' },
  historyApiFallback: true,
  hot: true,
  inline: true,
  noInfo: false,
  publicPath: browserConfig.output.publicPath,
  stats: {
    colors: true,
    hash: true,
    timings: true,
    chunks: false
  }
}).listen(config.webpackServer.port, 'localhost', function(err) {
  if(err) {
    logger.error(err)
    return
  }

  logger.info(`Webpack dev server is listening at localhost: ${config.webpackServer.port}`)
})
