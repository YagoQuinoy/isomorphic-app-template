// Libs
import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

// Containers
import Hello from '../../containers/Hello';

// Components
import Header from '../Header';
import Footer from '../Footer';

// Styles
import styles from './app.css';

/**
 * Application component. Just a wrapper.
 */
class App extends Component {
  render() {
    // TODO: Poner Router y Route aquí
    return (
        <div className={styles.app}>
          <div className="container">
            <Header />
            <div>
              <Switch>
                <Route exact path="/hello/:name" component={ Hello } />
              </Switch>
              </div>
          </div>
          <Footer />
        </div>
    );
  }
}

export default App;
