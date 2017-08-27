// Libs
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as actions from '../../actions/articles'

// Styles
import styles from './home.css'

// Images
// import image1 from './images-1.jpg'

/**
 * Default root component. Shows a link to questions. It could ve a component.
 */
class Home extends Component {
  static needs = [actions.getArticles]

  componentDidMount() {
    if (this.props.loaded) {
      this.props.getArticles()
    }
  }

  render() {
    const { articles } = this.props

    const items = articles.map((article, index) => (
      <section key={`_${index}`}>
        <h5><Link to={`/articles/${index}`}>{article.title}</Link></h5>
        <p>{article.content}</p>
      </section>
    ))

    return (
      <div className={ styles.home }>
        { items }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loaded: state.app.loaded,
    articles: state.articles
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getArticles: () => {
      dispatch(actions.getArticles())
    }
  }
}

const ConenctedHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default ConenctedHome
