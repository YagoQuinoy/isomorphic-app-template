// React/Redux
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

/**
 * Renders a list of loaded questions from api into links
 */
class SaluteForm extends Component {
  render() {
    // const { id, nickname, name, surname } = this.props.user
    return (
      <div>
        <form method="POST" action="#">
          <input type="text" placeholder="Put your name here!" />
        </form>
      </div>
    )
  }
}

SaluteForm.propTypes = {
  // user: PropTypes.object.isRequired
}

export default SaluteForm
