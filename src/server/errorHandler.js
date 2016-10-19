export function handleUncaughtException(server) {
  server.on('uncaughtException', (req, res, route, err) => {
    req.log.error(err);
    res.send(500, 'Something went wrong...');
  });
};

export function handleExceptions(server) {
  server.on('after', (req, res, route, err) => {
    if(!err){
      return;
    }

    req.log.error(err);
    res.send('Something went wrong...');

  });
};
