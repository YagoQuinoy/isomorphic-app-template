// React/Redux
import React, { Component } from 'react'

import styles from './other.css'

/**
 * Default root component. Shows a link to questions. It could ve a component.
 */
class Other extends Component {
  render() {
    const text = 'Other sweet other'
    return (
      <div className={ styles.other }>
        { text }
      </div>
    )
  }
}

export default Other
