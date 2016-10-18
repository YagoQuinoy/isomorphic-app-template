import restify from 'restify';

import * as apiRoute from './api';
import { render } from '../serverSideRendering';

/**
 * Main server router
 * @param  {Server} server
 */
export function init(server) {
  // Api
  apiRoute.route(server);

  // Statics
  const staticPath = __dirname + '/../../';
  server.get(/\/static\/?.*|\/favicon.ico/, restify.serveStatic({
    directory: staticPath
  }));

  // Server Side Rendering
  server.get(/.*/, (req, res, next) => {
    render(req, res, next);
  });
};
