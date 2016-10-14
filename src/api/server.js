// Libs
import path from 'path';
import restify from 'restify';
import bunyan from 'bunyan';

import config from '../../config';
import * as errorHandler from './errorHandler';
import * as router from './router';

const logger = bunyan.createLogger({
  name: 'showtime',
  level: (config.env === 'development') ? 'debug' : 'info'
});

const server = restify.createServer({
  log: logger
});
errorHandler.init(server);

// Logging
server.use(restify.requestLogger());

if(config.env !== 'production') {
  server.on('after', restify.auditLogger({
    log: bunyan.createLogger({
      name: 'audit',
      stream: process.stdout,
      body: true
    })
  }));
}

router.init(server);

server.listen(config.port, () => {
  server.log.info(`${server.name} listening on ${config.port}`);
});
