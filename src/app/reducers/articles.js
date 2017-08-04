/**
 * Questions reducers
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 */
function articlesReducer(state = {}, action) {
  switch(action.type) {
    case 'GET_ARTICLES_REQUEST':
      return state

    case 'GET_ARTICLES':

      return action.response

    case 'GET_ARTICLES_FAILURE':
      return state

    default:
      return state
  }
}

export default articlesReducer
