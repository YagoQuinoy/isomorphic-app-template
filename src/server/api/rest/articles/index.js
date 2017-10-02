import { articles } from '../../mocks.js'

/**
 * Hello controller. Returns a salute!
 * @param  {Request} req
 * @param  {Response} res
 */
function getArticles(req, res, next) {
  res.send(articles)
  next()
}

function getArticle(req, res, next) {
  res.send(articles[req.params.id])
  next()
}

export {
  getArticles,
  getArticle
}
