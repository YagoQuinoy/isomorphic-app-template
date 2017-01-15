// React
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

// Components
import App from '../components/App';

// Containers
import Hello from '../containers/Hello';

/**
 * Application router
 * @param  {History} history [Front-end -> browserHistory,  Back-end -> memoryHistory]
 * @return {Object}
 */
export default function(history) {

  return (
    <Router history={ history }>
      <Route path="/" component={ App }>
        <Route path="hello/:name" component={ Hello } />
      </Route>
    </Router>
  );
}
