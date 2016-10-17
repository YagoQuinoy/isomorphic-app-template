// Libs
import _ from 'lodash'

// React/Redux
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Componentes
import User from 'components/User'

// Actions
import { loadQuestionDetail } from 'actions/questions'

/**
 * Renders retrieved question detail and user from api
 */
class Question extends Component {
  static needs = [loadQuestionDetail]

  componentDidMount() {
    const { params, loadQuestionDetail } = this.props
    loadQuestionDetail(params)
  }

  render() {
    const { content, user } = this.props.question
    return (
      <div>
        <h2>{ content }</h2>
        <User user={ user } />
      </div>
    )
  }
}

Question.propTypes = {
  question: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return { question: state.questionDetail }
}

export { Question } // For testing purposes
export default connect(mapStateToProps, { loadQuestionDetail })(Question)
