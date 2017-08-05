const defaultState = { loaded: false }

function appReducer(state = defaultState, action) {
  switch(action.type) {
    case 'APP_LOADED':
      return {
        loaded: true
      }

    default:
      return state
  }
}

export default appReducer
