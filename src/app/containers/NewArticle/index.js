// Libs
import React, { Component } from 'react'
import { connect } from 'react-redux'

import ArticleForm from '../../components/ArticleForm'

import * as actions from '../../actions/articles'

// Styles
import styles from './newArticle.css'

/**
 * Default root component. Shows a link to questions. It could ve a component.
 */
class NewArticle extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit.bind(this)
  }

  handleSubmit(article) {
    console.log('new', article)
  }

  render() {
    return (
      <section className={styles.newArticle}>
        <h5>New article</h5>
        <ArticleForm onSubmit={this.handleSubmit} />
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getArticle: (params) => dispatch(actions.getArticle(params))
  }
}

export default connect(() => ({}), mapDispatchToProps)(NewArticle)
