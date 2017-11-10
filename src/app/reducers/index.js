// Libs
import { combineReducers } from  'redux'

// Reducers
import appReducer from './app'
import articlesReducer from './articles'
import articleReducer from './article'
import newArticleReducer from './newArticle'
import editArticleReducer from './editArticle'

const rootReducer = combineReducers({
  app: appReducer,
  articles: articlesReducer,
  article: articleReducer,
  newArticle: newArticleReducer,
  editArticle: editArticleReducer
})

export default rootReducer
