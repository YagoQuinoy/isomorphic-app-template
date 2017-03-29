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

// TODO: Refactorizar entero por React-Router 4

/**
 * If server rendered react app returned a promise (due to async ops), obtains that promise
 * and return it, else, creates a new resolved promise.
 * @param  {History} history
 * @param  {Object} store
 * @param  {Object} renderProps
 * @return {Promise}
 */
// function fetchComponentNeeds(dispatch, components, params) {
//   components.splice(0, 1);
//
//   const needs = components.reduce((prev, current) => {
//     let componentNeeds = get(current, 'WrappedComponent.needs', []);
//     if(componentNeeds.length === 0) {
//       componentNeeds = get(current, 'needs', []);
//     }
//
//     return componentNeeds.concat(prev);
//   }, []);
//
//   const promises = needs.map((need) => {
//     return dispatch(need(params));
//   });
//
//   return Promise.all(promises);
// }

/**
 * Server rendering a React application
 * @param  {Request} req
 * @param  {Response} res
 * @param  {Function} next
 */
export function render(req, res, next) {
  // const urlObj = url.parse(getFullUrl(req));
  //
  // const history = createMemoryHistory(urlObj.href);
  const store = configureStore();
  // const routes = createRoutes(history);
  //
  // match({ routes, location: urlObj.pathname }, (err, redirectLocation, renderProps) => {
  //   if(err) {
  //     next(new restify.errors.InternalServerError(err));
  //     return;
  //   }
  //
  //   if (redirectLocation) {
  //     res.redirect(301, redirectLocation.pathname + redirectLocation.search);
  //     next();
  //     return;
  //   }
  //
  //   if (renderProps === null) {
  //     next(new restify.errors.NotFoundError('Not found'));
  //     return;
  //   }
  //
  //   fetchComponentNeeds(store.dispatch, renderProps.components, renderProps.params)
  //     .then(() => {
  //       const html = ReactDOMServer.renderToString(
  //           <Provider store={store}>
  //             { <RouterContext {...renderProps}/> }
  //           </Provider>
  //         );
  //
  //         const reduxState = escape(JSON.stringify(store.getState()));
  //
  //         ejs.renderFile(path.resolve(__dirname + '/templates/index.ejs'), {
  //           html,
  //           favicon,
  //           scripts,
  //           reduxState
  //         }, function(err, rendered) {
  //           if(err){
  //             return next(err);
  //           }
  //
  //           res.end(rendered);
  //           next();
  //         });
  //   })
  //   .catch((err) => {
  //     next(new restify.errors.InternalServerError(err));
  //   });
  // });

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
