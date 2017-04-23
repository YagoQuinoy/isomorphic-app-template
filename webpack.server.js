// Libs
import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import bunyan from 'bunyan'

// App config
import config from './config'

// Webpack config
import webpackConfig from './webpack.config.babel'

const logger = bunyan.createLogger({
  name: 'webpackDevServer',
  stream: process.stdout
})

const browserConfig = webpackConfig[0]
new WebpackDevServer(webpack(browserConfig), {
  publicPath: browserConfig.output.publicPath,
  // hot: true,
  historyApiFallback: true,
  compress: true,
  stats: {
    colors: true,
    hash: true,
    timings: true,
    chunks: false
  }
}).listen(config.webpackDevServerPort, 'localhost', function(err) {
  if(err) {
    logger.error(err)
    return
  }

  logger.info(`Webpack dev server is listening at localhost: ${config.port}`)
})
