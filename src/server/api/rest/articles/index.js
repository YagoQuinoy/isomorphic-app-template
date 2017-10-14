import Article from '../../models/article'

/**
 * Hello controller. Returns a salute!
 * @param  {Request} req
 * @param  {Response} res
 */
function getArticles(req, res, next) {
  Article.find()
    .then((articles) => {
      res.send(articles)
      next()
    })
}

function getArticle(req, res, next) {
  Article.findOne({ _id: req.params.id })
    .then((article) => {
      res.send(article)
      next()
    })
}

export {
  getArticles,
  getArticle
}
