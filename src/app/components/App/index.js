// Libs
import React, { Component } from 'react'
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
  render() {
    return (
      <Switch>
        { routes.map((route, index) => (<LayoutRoute key={index} {...route} />)) }
      </Switch>
    )
  }
}

export default App
