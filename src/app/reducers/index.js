// Reducers
import footerReducer from './footer'
import headerReducer from './header'
import infoReducer from './info'

/**
 * TODO: Desde refactor de info(aka microsites) y boards, es posible que este
 * modo de root reducer no sea necesario.
 * @param  {[type]} state
 * @param  {[type]} action
 * @return {[type]}
 */
function rootReducer(state, action) {
  const {type} = action
  switch(true) {
    case (/^GET_HEADER(_REQUEST|_FAILURE)?$/).test(type):
      return state.merge(headerReducer(state, action))

    case (/^GET_FOOTER(_REQUEST|_FAILURE)?$/).test(type):
      return state.merge(footerReducer(state, action))

      case (/^GET_INFO(_REQUEST|_FAILURE)?$/).test(type):
        return state.merge(infoReducer(state, action))
  }

  return state
}

export default rootReducer
