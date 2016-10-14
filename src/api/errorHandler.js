export function init(server) {
  server.on('uncaughtException', (req, res, route, err) => {
    console.error(err);
    res.send(500, 'something went wrong...');
  });
};
