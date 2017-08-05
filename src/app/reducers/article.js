/**
 * Questions reducers
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 */
function articlesReducer(state = {}, action) {
  switch(action.type) {
    case 'GET_ARTICLE_REQUEST':
      return state

    case 'GET_ARTICLE':
      return action.response

    case 'GET_ARTICLE_FAILURE':
      return state

    default:
      return state
  }
}

export default articlesReducer
