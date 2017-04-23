// Libs
import { Record } from 'immutable'

// import { getImmutableList } from './helpers'


const Model = Record({
  id: 0
})

const Ui = Record({})

function getModel(model = {}) {
  const {
    id
  } = model

  return new Model({
    id
  })
}

function getUi(ui = {}) {
  return new Ui(ui)
}

class Header extends Record({
  model: new Model(),
  ui: new Ui()
}) {
  static getImmutable = function(props = {}) {
    const {model, ui} = props

    return new this({
      model: getModel(model),
      ui: getUi(ui)
    })
  }
}

export { Model, Ui }
export default Header
