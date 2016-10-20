// Libs
import url from 'url';
import path from 'path';
import _ from 'lodash';
import ejs from 'ejs';
import Promise from 'bluebird';
import restify from 'restify';
import { createMemoryHistory } from 'history';

// React
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext, match } from 'react-router';

// Store
import configureStore from '../../store/configureStore';

// Fron-Router
import createRoutes from '../../routes';

import { getFullUrl } from '../utils';

// Assets paths
// TODO: Recoger de config
const port = (process.env.NODE_ENV === 'development') ? 3001 : 3000;
const favicon = `http://localhost:${port}/static/favicon.ico`;
const scripts = [`http://localhost:${port}/static/app.bundle.js`];

if(process.env.NODE_ENV === 'development') {
  scripts.push(`http://localhost:${port}/static/dev.bundle.js`);
}

/**
 * If server rendered react app returned a promise (due to async ops), obtains that promise
 * and return it, else, creates a new resolved promise.
 * @param  {History} history
 * @param  {Object} store
 * @param  {Object} renderProps
 * @return {Promise}
 */
function fetchComponentNeeds(dispatch, components, params) {
  components.splice(0, 1);

  const needs = components.reduce( (prev, current) => {
    let componentNeeds = _.get(current, 'WrappedComponent.needs', []);
    if(componentNeeds.length === 0){
      componentNeeds = _.get(current, 'needs', []);
    }

    return componentNeeds.concat(prev);
  }, []);

  const promises = needs.map((need) => {
    return dispatch(need(params));
  });

  return Promise.all(promises);
}

/**
 * Server rendering a React application
 * @param  {Request} req
 * @param  {Response} res
 * @param  {Function} next
 */
export function render(req, res, next) {
    const urlObj = url.parse(getFullUrl(req));

    const history = createMemoryHistory(urlObj.href);
    const store = configureStore();
    const routes = createRoutes(history);

    match({ routes, location: urlObj.pathname }, (err, redirectLocation, renderProps) => {
      if(err){
        next(err);
        return;
      }

      if (redirectLocation) {
        res.redirect(301, redirectLocation.pathname + redirectLocation.search);
        next();
        return;
      }

      if (renderProps === null) {
        res.send(404, 'Not found');
        next();
        return;
      }

      fetchComponentNeeds(store.dispatch, renderProps.components, renderProps.params)
        .then(()=> {
          const html = ReactDOMServer.renderToString(
              <Provider store={store}>
                { <RouterContext {...renderProps}/> }
              </Provider>
            );

            throw new Error('merde');
            return;

            const reduxState = escape(JSON.stringify(store.getState()));

            ejs.renderFile(path.resolve(__dirname + '/templates/index.ejs'), {
              html,
              favicon,
              scripts,
              reduxState
            }, function(err, rendered) {
              if(err){
                return next(err);
              }

              res.end(rendered);
              next();
            });
      })
      .catch((err)=> {
        // console.log(err);
        next(new restify.errors.InternalServerError('petada'));
      });
    });
}
