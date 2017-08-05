// Libs
import { combineReducers } from  'redux'

// Reducers
import appReducer from './app'
import articlesReducer from './articles'
import articleReducer from './article'

const rootReducer = combineReducers({
  app: appReducer,
  articles: articlesReducer,
  article: articleReducer
})

export default rootReducer
