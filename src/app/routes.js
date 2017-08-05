// Components
import Home from './components/Home'
import Article from './components/Article'

export default [{
  exact: true,
  path: '/',
  component: Home
}, {
  exact: true,
  path: '/articles/:id',
  component: Article
}]
