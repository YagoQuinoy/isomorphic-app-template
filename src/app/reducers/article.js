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
      // TODO: Do something with error
      return state

    case 'NEW_ARTICLE_REQUEST':
      return state

    case 'NEW_ARTICLE':
      return action.response

    case 'NEW_ARTICLE_FAILURE':
      // TODO: Do something with error
      return state

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
