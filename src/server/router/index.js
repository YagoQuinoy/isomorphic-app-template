// Libs
import path from 'path'
import restify from 'restify'

// Api
import * as restRoute from './rest'
import * as graphqlRoute from './graphql'

// Server-Side Rendering
import { render } from '../serverSideRendering'

/**
 * Main server router
 * @param  {Server} server
 */
export function init(server) {
  restRoute.route(server)
  graphqlRoute.route(server)

  const staticPath = path.resolve(`${__dirname}/../../../`)
  server.get(/\/public\/?.*/, restify.serveStatic({
    directory: staticPath
  }))

  server.get(/.*/, (req, res, next) => {
    render(req, res, next)
  })
}
