// Components
import Form from './components/Form'
import Home from './components/Home'
import Other from './components/Other'

export default [{
  exact: true,
  path: '/',
  component: Home
}, {
  path: '/form',
  component: Form
}, {
  path: '/other',
  component: Other
}]
