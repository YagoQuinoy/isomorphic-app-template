// React/Redux
import React, { Component, PropTypes } from 'react'

/**
 * Renders a list of loaded questions from api into links
 */
class User extends Component {
  render() {
    let { id, nickname, name, surname } = this.props.user
    return (
      <div key={ id }>
        <h2>{ nickname }</h2>
        <li>name: { name }</li>
        <li>surname: { surname }</li>
      </div>
    )
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired
}

export default User
