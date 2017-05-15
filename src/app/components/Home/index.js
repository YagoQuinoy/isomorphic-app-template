// React/Redux
import React, { Component } from 'react'

import styles from './home.css'

/**
 * Default root component. Shows a link to questions. It could ve a component.
 */
class Home extends Component {
  render() {
    const text = 'Home sweet home'
    return (
      <div className={ styles.home }>
        { text }
      </div>
    )
  }
}

export default Home
