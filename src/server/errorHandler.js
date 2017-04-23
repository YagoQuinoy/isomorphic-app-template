export function handleUncaughtException(server) {
  server.on('uncaughtException', (req, res, err) => {
    req.log.error(err)
    res.send(500, 'Something went wrong...')
  })
}

export function handleExceptions(server) {
  server.on('InternalServer', (req, res, err) => {
    if(!err){
      return
    }

    req.log.error(err)
    res.send(500, 'Something went wrong...')

  })
}
