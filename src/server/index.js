// Libs
import restify from 'restify'
import bunyan from 'bunyan'
import bformat from 'bunyan-format'

import config from '../../config'
import * as errorHandler from './errorHandler'
import * as router from './routes'

const formatOut = bformat({ outputMode: 'short' }, process.stdout)

const logger = bunyan.createLogger({
  name: 'showtime',
  level: (config.env === 'development') ? 'debug' : 'info',
  stream: formatOut
})

const server = restify.createServer({
  log: logger
})

errorHandler.handleUncaughtException(server)

server.use(restify.plugins.bodyParser())
server.use(restify.plugins.queryParser())

// Logging
server.use(restify.requestLogger())

if(config.env !== 'production' && config.logger.audit) {
  server.on('after', restify.auditLogger({
    log: bunyan.createLogger({
      name: 'audit',
      stream: formatOut,
      body: true
    })
  }))
}

router.init(server)

errorHandler.handleExceptions(server)

server.listen(config.server.port, () => {
  server.log.info(`${server.name} listening on ${config.server.port}`)
})
