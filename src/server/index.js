// Libs
import restify from 'restify'
import bunyan from 'bunyan'
import bformat from 'bunyan-format'
import mongoose from 'mongoose'

import config from '../../config'
import * as errorHandler from './errorHandler'
import * as routes from './routes'

// Create logger
const formatOut = bformat({ outputMode: 'short' }, process.stdout)
const logger = bunyan.createLogger({
  name: 'showtime',
  level: (config.env === 'development') ? 'debug' : 'info',
  stream: formatOut
})

// Create server
const server = restify.createServer({
  log: logger
})

// Handle exceptions
errorHandler.handleUncaughtException(server)
errorHandler.handleExceptions(server)

// Middlewares
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

// Routes
routes.init(server)

// Database setup
const { database } = config
mongoose.connect(database.uri, {
  user: database.user,
  pass: database.pass
})

// Start server
server.listen(config.server.port, () => {
  server.log.info(`${server.name} listening on ${config.server.port}`)
})
