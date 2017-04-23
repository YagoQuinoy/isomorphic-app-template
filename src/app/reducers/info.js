// Models
import Info from '../models/Info'

/**
 * Questions reducers
 * @param  {Object} state
 * @param  {Object} action
 * @return {Object}
 */
function infoReducer(state, action) {
  switch(action.type) {
    case 'GET_INFO_REQUEST':
      return state

    case 'GET_INFO':
      return state.set('info', Info.getImmutable(action.response))

    case 'GET_INFO_FAILURE':
      return state

    default:
      return state
  }
}

export default infoReducer
