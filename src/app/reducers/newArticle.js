/**
 * Questions reducers
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 */
function articlesReducer(state = {}, action) {
  switch(action.type) {
    case 'NEW_ARTICLE_REQUEST':
      return state

    case 'NEW_ARTICLE':
      return action.response

    case 'NEW_ARTICLE_FAILURE':
      // TODO: Do something with error
      return state

    default:
      return state
  }
}

export default articlesReducer
