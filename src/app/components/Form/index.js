// React/Redux
import React, { Component } from 'react'

import styles from './form.css'

/**
 * Default root component. Shows a link to questions. It could ve a component.
 */
class Form extends Component {
  render() {
    return (
      <div className={ styles.form }>
        <form>
          <div>
            <lable>input1</lable>
            <input type="text" />
          </div>
          <div>
            <lable>input2</lable>
            <input type="text" />
          </div>
        </form>
      </div>
    )
  }
}

export default Form
