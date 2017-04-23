// import Footer from '../models/Footer'

/**
 * Questions reducers
 * @param  {Object} [state=defaultState]
 * @param  {Object} action
 * @return {Object}
 */
function footerReducer (state, action) {
  switch(action.type) {
    case 'GET_FOOTER_REQUEST':
      return state

    case 'GET_FOOTER':
      // return state.set('footer', Footer.getImmutable(action.response))
      return state

    case 'GET_FOOTER_FAILURE':
      return state

    default:
      return state
  }
}

export default footerReducer
