// Libs
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as actions from '../../actions/articles'

// Styles
import styles from './article.css'

/**
 * Default root component. Shows a link to questions. It could ve a component.
 */
class Article extends Component {
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
      <section className={ styles.article }>
        <h5><Link to={`/articles/${match.params.id}`}>{article.title}</Link></h5>
        <p>{article.content}</p>
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
    getArticle: (params) => {
      dispatch(actions.getArticle(params))
    }
  }
}

const ConnectedArticle = connect(
  mapStateToProps,
  mapDispatchToProps
)(Article)

export default ConnectedArticle
