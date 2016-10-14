export function init(server) {
  server.on('uncaughtException', (req, res, route, err) => {
    req.log.error(err);
    res.send(500, 'Something went wrong...');
  });
};
