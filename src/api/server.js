import path from 'path';
import restify from 'restify';

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

const server = restify.createServer();

// Routing
server.get('/api/hello/:name', respond);
server.head('/api/hello/:name', respond);


const staticPath = __dirname + '/../../';
server.get(/\/static\/?.*/, restify.serveStatic({
  directory: staticPath
}));

// Server rendering
server.get(/.*/, restify.serveStatic({
  directory: staticPath + 'static/',
  file: 'index.html'
}))

const port = 8080;
server.listen(port, () => {
  console.log(server.name + ' listening on ' + port);
});
