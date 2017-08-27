// Libs
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import ArticleForm from '../../components/ArticleForm'

import * as actions from '../../actions/articles'

// Styles
import styles from './editArticle.css'

/**
 * Default root component. Shows a link to questions. It could ve a component.
 */
class EditArticle extends Component {
  static needs = [actions.getArticle]

  componentDidMount() {
    if (this.props.loaded) {
      const { match, getArticle } = this.props
      getArticle(match.params)
    }
  }

  render() {
    const { match, article } = this.props

    return (
      <section className={styles.editArticle}>
        <h5><Link to={`/articles/${match.params.id}`}>Edit {article.title}</Link></h5>
        <ArticleForm article={article} />
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    loaded: state.app.loaded,
    article: state.article
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getArticle: (params) => dispatch(actions.getArticle(params))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditArticle)
