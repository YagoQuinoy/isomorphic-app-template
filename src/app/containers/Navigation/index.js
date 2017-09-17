// React/Redux
import React, { Component } from 'react'

// Styles
import styles from './navigation.css'

/**
 * Default root component. Shows a link to questions. It could ve a component.
 */
class Navigation extends Component {
  render() {
    return (
      <div className={ styles.navigation }>
        <div className={ styles.search }>
          <input type="text" />
          <span className={styles['icon-search']} />
        </div>
      </div>
    )
  }
}

export default Navigation
