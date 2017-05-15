// React/Redux
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styles from './header.css'

/**
 * Default root component. Shows a link to questions. It could ve a component.
 */
class Header extends Component {
  render() {
    return (
      <header className={ styles.header }>
        <h1>Isomorphic App Template</h1>
        <ul className={ styles.navigation }>
          <li>
            <Link to={ '/' }>
              Home
            </Link>
          </li>
          <li>
            <Link to={ '/form' }>
              Form
            </Link>
          </li>
          <li>
            <Link to={ '/other' }>
              Other
            </Link>
          </li>
        </ul>
      </header>
    )
  }
}

export default Header
