// Libs
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

// Styles
import 'normalize.css'
import './default.css'
import styles from './app.css'

// Componentes
import Header from '../Header'
import Footer from '../Footer'

// Routes
import routes from '../../routes'

// Actions
import * as actions from '../../actions/app'

const LayoutRoute = ({component: Component, ...rest}) => {
  // NOTE: Here we can chose layout by component

  const renderLayout = (props) => (
    <div className={ styles.app }>
      <Header/>
      <div className={ styles.container }>
        <Component {...props}/>
      </div>
      <Footer />
    </div>
  )

  return (
    <Route {...rest} render={renderLayout} />
  )
}

/**
 * Application component. Just a wrapper.
 */
class App extends Component {
  componentDidMount() {
    // NOTE: Dont know why redux connect fails, so...
    this.props.dispatch(actions.appLoaded())
  }

  render() {
    return (
      <Switch>
        { routes.map((route, index) => (<LayoutRoute key={index} {...route} />)) }
      </Switch>
    )
  }
}

export default App
