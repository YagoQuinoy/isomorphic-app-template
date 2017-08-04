/**
 * Questions reducers
 * @param  {Object} [state=defaultState] Solo tiene acceso a header y a info
 * @param  {Object} action
 * @return {Object}
 */
function headerReducer(state = {}, action) {
  switch(action.type) {
    case 'GET_HEADER_REQUEST':
      return state

    case 'GET_HEADER':
      return action.response

    case 'GET_HEADER_FAILURE':
      return state

    default:
      return state
  }
}

export default headerReducer
