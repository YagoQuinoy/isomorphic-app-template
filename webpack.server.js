// Libs
import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import bunyan from 'bunyan'

// App config
import config from './config'

// Webpack config
import webpackConfig from './webpack/webpack.config.babel'

const logger = bunyan.createLogger({
  name: 'webpackDevServer',
  stream: process.stdout
})

const browserConfig = webpackConfig[0]
new WebpackDevServer(webpack(browserConfig), {
  publicPath: browserConfig.output.publicPath,
  headers: { 'Access-Control-Allow-Origin': '*' },
  hot: true,
  inline: true,
  historyApiFallback: true,
  compress: true,
  noInfo: true,
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
