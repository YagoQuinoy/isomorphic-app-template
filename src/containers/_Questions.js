// Libs
import _ from 'lodash'

// React/Redux
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

// Componentes
import Questions from 'components/Questions'

// Actions
import { loadQuestions } from 'actions/questions'

/**
 * Renders a Questions component with the given links
 */
class QuestionContainer extends Component {
  static needs = [loadQuestions]

  componentDidMount() {
    const { loadQuestions } = this.props
    loadQuestions()
  }

  render() {
    const { questions } = this.props

    return (
      <div>
        <h2>Question</h2>
        <Questions questions={ questions } />
        <Link to="/">Back to Home</Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { questions: state.questions }
}

export { QuestionContainer } // For testing purposes
export default connect(mapStateToProps, { loadQuestions })(QuestionContainer)
