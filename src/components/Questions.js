// React/Redux
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

/**
 * Renders a list of loaded questions from api into links
 */
class Questions extends Component {
  render() {
    return (
      <div>
        Questions component
        {
          this.props.questions.map((q)=> {
            return (
              <div key={ q.id }>
                <Link to={ `/questions/${q.id}` }> { q.content }</Link>
              </div>
            )
          })
        }
      </div>
    )
  }
}

Questions.propTypes = {
  questions: PropTypes.array.isRequired
}

export default Questions
