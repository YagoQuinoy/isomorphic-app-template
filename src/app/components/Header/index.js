// React/Redux
import React, { Component } from 'react'

import styles from './header.css'

/**
 * Default root component. Shows a link to questions. It could ve a component.
 */
class Header extends Component {
  render() {
    return (
      <div className={ styles.header }>
        <h1>Isomorphic App Template</h1>
      </div>
    )
  }
}

export default Header
