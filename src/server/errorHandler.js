export function handleUncaughtException(server) {
  server.on('uncaughtException', (req, res, next, err) => {
    req.log.error(err)
    res.send(500, 'Something went wrong...')
  })
}

export function handleExceptions(server) {
  server.on('InternalServer', (req, res, next, err) => {
    if(!err){
      return
    }

    req.log.error(err)
    res.send(500, 'Something went wrong...')

  })
}
