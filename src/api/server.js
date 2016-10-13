// Libs
import path from 'path';
import restify from 'restify';

import { render } from './serverRendering';

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
}

const server = restify.createServer();

// Routing
server.get('/api/hello/:name', respond);
server.head('/api/hello/:name', respond);

const staticPath = __dirname + '/../../';
server.get(/\/static\/?.*|\/favicon.ico/, restify.serveStatic({
  directory: staticPath
}));

server.get(/.*/, (req, res, next) => {
  render((err, html) => {
    res.end(html);
  });
});

const port = 3000; // TODO: A config!
server.listen(port, () => {
  console.log(server.name + ' listening on ' + port);
});
