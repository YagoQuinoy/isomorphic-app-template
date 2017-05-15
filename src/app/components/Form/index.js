// React/Redux
import React, { Component } from 'react'

import styles from './form.css'

/**
 * Default root component. Shows a link to questions. It could ve a component.
 */
class Form extends Component {
  render() {
    const text = 'Form sweet form'
    return (
      <div className={ styles.form }>
        { text }
      </div>
    )
  }
}

export default Form
