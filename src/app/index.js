// Libs
import _ from 'lodash'
import 'babel-polyfill' // NOTE: Hace falta?
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

// Component
import App from './components/App'

import config from '../../config'

// Store
import configureStore from './store/configureStore'

/**
 * [renderAppComponent description]
 * @param  {[type]} Component
 * @param  {[type]} store
 * @return {[type]}
 */
function renderAppComponent(Component, store) {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Component />
      </Provider>
    </BrowserRouter>
  )
}

/**
 * [render description]
 * @param  {[type]} component
 * @return {[type]}
 */
function render(component) {
  ReactDOM.render((component), document.getElementById('root'))
}

/**
 * [renderDev description]
 * @param  {[type]} Component
 * @param  {[type]} store
 * @return {[type]}
 */
function renderDev(Component, store) {
  // AppContainer is a necessary wrapper component for HMR
  const AppContainer = require('react-hot-loader').AppContainer

  const rendered = renderAppComponent(Component, store)

  render (
    <AppContainer>
      { rendered }
    </AppContainer>
  )
}

/**
 * Component it's used
 * @param  {[type]} Component
 * @param  {[type]} store
 * @return {[type]}
 */

const initialState = {}
if (window.__INITIAL_STATE__) {
  try {
    const plain = JSON.parse(unescape(window.__INITIAL_STATE__))
    _.each(plain, (val, key) => initialState[key] = val)
  } catch (e) {
    // console.error(e) // NOTE: Algo habrá que hacer aquí
  }
}

const store = configureStore(initialState)


console.log(config.env)

if(config.env === 'development') {
  renderDev(App, store)

  // Hot Module Replacement API
  if (module.hot) {
    module.hot.accept('./components/App', () => {
      renderDev(App, store)
    })
  }
} else {
  const rendered = renderAppComponent(App, store)
  render(rendered)
}
