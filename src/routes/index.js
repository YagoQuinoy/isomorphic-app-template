// React
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// Store
import configureStore from '../store/configureStore';

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
  const store = configureStore();
  const syncHistory = syncHistoryWithStore(history, store);

  // <Route path="hello/:name" component={ Hello } />
  // <IndexRoute component={ Hello } />
  // 
  return (
    <Router history={ syncHistory }>
      <Route path="/" component={ App }>
      </Route>
    </Router>
  );
}
