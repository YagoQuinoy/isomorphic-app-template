// Libs
import { each } from 'lodash';
import 'babel-polyfill'; // NOTE: Hace falta?
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

// Store
import configureStore from './store/configureStore';

const reduxState = {};
if (window.__REDUX_STATE__) {
  try {
    const plain = JSON.parse(unescape(window.__REDUX_STATE__));
    each(plain, (val, key) => reduxState[key] = val);
  } catch (e) {
    // console.error(e); // NOTE: Algo habrá que hacer aquí
  }
}

const store = configureStore(reduxState);

render((
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
), document.getElementById('root'));
