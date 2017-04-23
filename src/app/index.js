// Libs
import { each } from 'lodash'
import 'babel-polyfill' // NOTE: Hace falta?
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

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

render((
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
), document.getElementById('root'))
