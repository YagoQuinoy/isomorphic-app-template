// Libs
import path from 'path';
import restify from 'restify';

import config from '../../config';

import * as errorHandler from './errorHandler';
import * as router from './router';

const server = restify.createServer();

errorHandler.init(server);
router.init(server);

server.listen(config.port, () => {
  console.log(server.name + ' listening on ' + config.port);
});
