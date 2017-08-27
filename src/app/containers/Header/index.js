// Libs
import React from 'react'
import { Link } from 'react-router-dom'

// Text
import styles from './header.css'

const items = [{
  path: '/',
  text: 'Home'
}, {
  path: '/articles/new',
  text: 'New article'
}]

function renderNavigation() {

  const list = items.map(item => (
    <li key={item.path} className={ styles.navItem }>
      <Link className={ styles.navLink } to={ item.path }>
        { item.text }
      </Link>
    </li>
  ))

  return (
    <ul className={ styles.nav }>
      { list }
    </ul>
  )
}

/**
 * [Header description]
 */
const Header = () => {
  const navigation = renderNavigation()

  return (
    <header className={ styles.header }>
      <h1>Isomorphic App Template</h1>
      { navigation }
    </header>
  )
}

export default Header
