// Libs
import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

// Component
import App from './containers/App'

import config from '../../config'

// Store
import configureStore from './store/configureStore'

/**
 * Render AppComponent
 * @param  {Component} AppComponent
 * @param  {Store} store
 * @return {Component}
 */
function renderAppComponent(AppComponent, store) {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppComponent dispatch={store.dispatch}/>
      </Provider>
    </BrowserRouter>
  )
}

/**
 * Render component and attach it to the DOM
 * @param  {Component} component
 * @return {undefined}
 */
function render(component) {
  ReactDOM.render((component), document.getElementById('root'))
}

/**
 * Render App Component for development
 * @param  {Component} Component
 * @param  {Store} store
 * @return {Component}
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

// Init
let initialState = {}

if (window.__INITIAL_STATE__) {
  try {
    initialState = JSON.parse(unescape(window.__INITIAL_STATE__))
  } catch (e) {
    // console.error(e) // NOTE: Algo habrá que hacer aquí
  }
}

const store = configureStore(initialState)

if(config.env === 'development') {
  renderDev(App, store)

  // Hot Module Replacement API
  if (module.hot) {
    module.hot.accept('./containers/App', () => {
      renderDev(App, store)
    })
  }
} else {
  const rendered = renderAppComponent(App, store)
  render(rendered)
}
