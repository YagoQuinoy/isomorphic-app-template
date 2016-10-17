// React/Redux
import { combineReducers } from 'redux'

// Reducers
import questions from './questions'
import questionDetail from './questionDetail'

const rootReducer = combineReducers({
  questions
})

export default rootReducer
