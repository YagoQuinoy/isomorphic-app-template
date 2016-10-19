// React/Redux
import { combineReducers } from 'redux';

// Reducers
import hello from './hello';

const rootReducer = combineReducers({
  hello
});

export default rootReducer;
