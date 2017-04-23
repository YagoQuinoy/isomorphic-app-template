import { Record } from 'immutable'

import Info from './Info'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

class App extends Record({
  info: new Info(),
  header: new Header(),
  body: new Body(),
  footer: new Footer()
}) {
  static getImmutable = function(props = {}) {
    const { info, header, body, footer } = props

    const appProps = {
      info: Info.getImmutable(info),
      header: Header.getImmutable(header),
      body: Footer.getImmutable(body),
      footer: Footer.getImmutable(footer)
    }

    return new this(appProps)
  }
}

export default App
