// Libs
import path from 'path'
import restify from 'restify'

// Api
import * as apiRoute from './api'

// Server-Side Rendering
import { render } from '../serverSideRendering'

/**
 * Main server router
 * @param  {Server} server
 */
export function init(server) {
  apiRoute.route(server)

  const staticPath = path.resolve(`${__dirname}/../../../`)
  server.get(/\/assets\/?.*/, restify.serveStatic({
    directory: staticPath
  }))

  server.get(/.*/, (req, res, next) => {
    render(req, res, next)

  })
}
