// React/Redux
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Reducers
import hello from './hello';

const rootReducer = combineReducers({
  hello,
  routing: routerReducer
});

export default rootReducer;
