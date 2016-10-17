// Libs
import _ from 'lodash';
import 'babel-polyfill';

// React
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';

// Store
import configureStore from 'store/configureStore';

// Router
import createRoutes from 'routes';

let reduxState = {};
if (window.__REDUX_STATE__) {
  try {
    let plain = JSON.parse(unescape(window.__REDUX_STATE__));
    _.each(plain, (val, key) => {
      reduxState[key] = val;
    });
  } catch (e) {
    console.error(e); // NOTE: Algo habrá que hacer aquí
  }
}

const store = configureStore(reduxState);

render((
  <Provider store={store}>
    { createRoutes(browserHistory) }
  </Provider>
), document.getElementById('app'));
