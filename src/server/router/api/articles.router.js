import * as ArticlesController from '../../api/controllers/articles'

/**
 * Hello controller router
 * @param  {Server} server
 */
export function route(server) {
  server.get('/api/articles', ArticlesController.getArticles)
  server.get('/api/articles/:id', ArticlesController.getArticle)
}
