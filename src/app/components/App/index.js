// Libs
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// Styles
import 'normalize.css'
import styles from './app.css'

// Componentes
import Header from '../Header'
import Footer from '../Footer'

// Routes
import routes from '../../routes'

/**
 * Application component. Just a wrapper.
 */
class App extends Component {
  render() {
    const LayoutRoute = ({component: Component, ...rest}) => (
      <Route
        {...rest}
        render={(props) => {
        return (
          <div className={ styles.app }>
            <Header />
            <div className={ styles.container }>
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
