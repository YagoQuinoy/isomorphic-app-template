// Libs
import { Record } from 'immutable'

class Body extends Record({
  id: -1
}) {
  static getImmutable = function(props = {}) {
    const { id } = props
    return new this({ id })
  }
}

export default Body
