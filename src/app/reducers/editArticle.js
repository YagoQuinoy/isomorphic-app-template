/**
 * Questions reducers
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 */
function articlesReducer(state = {}, action) {
  switch(action.type) {
    case 'EDIT_ARTICLE_REQUEST':
      return state

    case 'EDIT_ARTICLE':
      return action.response

    case 'EDIT_ARTICLE_FAILURE':
      // TODO: Do something with error
      return state

    default:
      return state
  }
}

export default articlesReducer
