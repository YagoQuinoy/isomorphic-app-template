// Libs
import { Record } from 'immutable'

// Helpers
// import { getImmutableList } from './helpers'

class Info extends Record({
  id: -1
}) {
  static getImmutable = function(props = {}) {
    const { id } = props

    return new this({
      id
    })
  }
}

export default Info
