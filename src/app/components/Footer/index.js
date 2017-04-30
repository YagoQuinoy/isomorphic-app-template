// React/Redux
import React, { Component } from 'react'

// Styles
import styles from './footer.css'

/**
 * Default root component. Shows a link to questions. It could ve a component.
 */
class Footer extends Component {
  render() {
    return (
      <div className={ styles.footer }>
        <a href="mailto:mymail@foo.com">mymail@foo.com</a>
      </div>
    )
  }
}

export default Footer
