import articlesRouter from './articles.router'

/**
 * Import and routes all controller routers
 * @param  {Server} server
 */
export default function route(server) {
 articlesRouter(server)
}
