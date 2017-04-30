// Containers
import Hello from './containers/Hello'
import Home from './components/Home'

// TODO: Añadir variable
export default [{
  exact: true,
  path: '/',
  component: Home
}, {
  path: '/hello/:name',
  component: Hello
}]
