import * as helloController from '../../api/controllers/hello'

/**
 * Hello controller router
 * @param  {Server} server
 */
export function route(server) {
  server.get('/api/hello/:name', helloController.getHello)
}
