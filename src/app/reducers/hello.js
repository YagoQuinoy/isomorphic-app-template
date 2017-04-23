// Actions
const defaultState = {}

/**
 * Questions reducers
 * @param  {Object} [state=defaultState]
 * @param  {Object} action
 * @return {Object}
 */
function helloReducer (state = defaultState, action) {
  switch(action.type) {
    case 'LOADED_HELLO':
      state = action.response
      return state

    default:
      return state
  }
}

export default helloReducer
