// Containers
import Home from './containers/Home'
import Article from './containers/Article'
import NewArticle from './containers/NewArticle'
import EditArticle from './containers/EditArticle'

export default [{
  exact: true,
  path: '/',
  component: Home
}, {
  exact: true,
  path: '/articles/new',
  component: NewArticle
}, {
  exact: true,
  path: '/articles/:id',
  component: Article
}, {
  exact: true,
  path: '/articles/:id/edit',
  component: EditArticle
}]
