import * as ArticlesController from '../../rest/articles'

/**
 * Hello controller router
 * @param  {Server} server
 */
export default function route(server) {
  server.get('/api/articles', ArticlesController.getArticles)
  server.get('/api/articles/:id', ArticlesController.getArticle)
  server.post('/api/articles', ArticlesController.newArticle)
  server.put('/api/articles/:id', ArticlesController.editArticle)
}
