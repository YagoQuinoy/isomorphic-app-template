import { Record } from 'immutable'

const Model = Record({}) // TODO: Definir modelo
const Ui = Record({}) // TODO: Definir modelo

function getModel(model = {}) {
  return new Model()
}

function getUi(ui = {}) {
  return new Ui()
}

class Footer extends Record({
  model: new Model(),
  ui: new Ui()
}) {
  static getImmutable = function(props = {}) {
    const { model, ui } = props

    // TODO: Haser cosas
    return new this({ model: getModel(model), ui: getUi(ui) })
  }
}

export { Model, Ui }
export default Footer
