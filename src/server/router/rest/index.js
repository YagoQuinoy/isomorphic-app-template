import * as articlesRouter from './articles.router'

/**
 * Import and routes all controller routers
 * @param  {Server} server
 */
export function route(server) {
 articlesRouter.route(server)

 /* NOTE: Add here more api controller routes */
}
