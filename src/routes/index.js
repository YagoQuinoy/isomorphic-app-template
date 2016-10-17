// React
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

// Components
import App from 'components/App';
import Intro from 'components/Intro';

// Containers
import Questions from 'containers/Questions';
import Question from 'containers/Question';

/**
 * Application router
 * @param  {History} history [Front-end -> browserHistory,  Back-end -> memoryHistory]
 * @return {Object}
 */
export default function(history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="questions" component={Questions} />
        <Route path="questions/:id" component={Question} />
        <IndexRoute component={Intro} />
      </Route>
    </Router>
  );
}
