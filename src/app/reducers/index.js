// Libs
import { combineReducers } from  'redux'

// Reducers
import headerReducer from './header'
import articlesReducer from './articles'

const rootReducer = combineReducers({
  header: headerReducer,
  articles: articlesReducer
})

export default rootReducer
