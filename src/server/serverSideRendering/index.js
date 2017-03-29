// Libs
import path from 'path';
import ejs from 'ejs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';

// Store
import configureStore from '../../app/store/configureStore';
import { StaticRouter } from 'react-router';

import App from '../../app/components/App';

// Assets paths
// TODO: Recoger de config
const port = (process.env.NODE_ENV === 'development') ? 3001 : 3000;
const favicon = `http://localhost:${port}/static/favicon.ico`;
const scripts = [`http://localhost:${port}/static/app.bundle.js`];

if(process.env.NODE_ENV === 'development') {
  scripts.push(`http://localhost:${port}/static/dev.bundle.js`);
}

/**
 * Server rendering a React application
 * @param  {Request} req
 * @param  {Response} res
 * @param  {Function} next
 */
export function render(req, res, next) {
  const store = configureStore();
  const context = {};

  const html = ReactDOMServer.renderToString(
    <StaticRouter location = { req.url } context = { context } >
      <Provider store = { store } >
        <App / >
      </Provider>
    </StaticRouter>
  );


  if(context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end();
    return;
  }

  const reduxState = escape(JSON.stringify(store.getState()));

  ejs.renderFile(path.resolve(__dirname + '/templates/index.ejs'), {
    html,
    favicon,
    scripts,
    reduxState
  }, (err, rendered) => {
    if(err) {
      next(err);
      return;
    }

    res.end(rendered);
    next();
  });
}
