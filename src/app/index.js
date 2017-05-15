// Libs
import { each } from 'lodash'
import 'babel-polyfill' // NOTE: Hace falta?
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { AppContainer } from 'react-hot-loader'
// AppContainer is a necessary wrapper component for HMR

// Component
import App from './components/App'

// Store
import configureStore from './store/configureStore'

const initialState = {}
if (window.__INITIAL_STATE__) {
  try {
    const plain = JSON.parse(unescape(window.__INITIAL_STATE__))
    each(plain, (val, key) => initialState[key] = val)
  } catch (e) {
    // console.error(e) // NOTE: Algo habrá que hacer aquí
  }
}

const store = configureStore(initialState)

const render = (Component) => {
  ReactDOM.render((
    <AppContainer>
      <BrowserRouter>
        <Provider store={store}>
          <Component />
        </Provider>
      </BrowserRouter>
    </AppContainer>
  ), document.getElementById('root'))
}

render(App)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  })
}
