// Libs
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// Componentes
import Header from '../Header'
import Footer from '../Footer'

// Routes
import routes from '../../routes'

import styles from './app.css'

/**
 * Application component. Just a wrapper.
 */
class App extends Component {
  render() {
    const LayoutRoute = ({component: Component, ...rest}) => (
      <Route
        {...rest}
        render={(props) => {
        // TODO: Escoger layout
        return (
          <div className={ styles.app }>
            <Header />
            <div className="container">
              <Component {...props}/>
            </div>
            <Footer />
          </div>
        )
      }}/>
    )

    return (
      <Switch>
        { routes.map((route, index) => (<LayoutRoute key={index} {...route} />)) }
      </Switch>
    )
  }
}

export default App
