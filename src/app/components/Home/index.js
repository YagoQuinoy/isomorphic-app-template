// Libs
import React, { Component } from 'react'
import { connect } from 'react-redux'

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

  // componentDidMount() {}

  render() {
    const { articles } = this.props

    return (
      <div className={ styles.home }>
        { articles.map((article, index) => (<p key={`_${index}`}>{article}</p>)) }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getArticles: () => {
      dispatch(actions.getArticles)
    }
  }
}

const ConenctedHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default ConenctedHome
