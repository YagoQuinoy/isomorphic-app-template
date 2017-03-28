// React/Redux
import React, { Component } from 'react';

import Header from '../Header';
import Footer from '../Footer';

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
            { this.props.children }
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
