// Libs
import path from 'path'
import restify from 'restify'

// Api
import apiRoute from '../api/routes'

// Server-Side Rendering
import { render } from '../serverSideRendering'

const staticPath = path.resolve(`${__dirname}/../../../`)

/**
 * Main server router
 * @param  {Server} server
 */
export function init(server) {
  apiRoute(server)

  server.get(/\/public\/?.*/, restify.serveStatic({
    directory: staticPath
  }))

  server.get(/.*/, (req, res, next) => {
    render(req, res, next)
  })
}
