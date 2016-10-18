// React/Redux
import React, { Component, PropTypes } from 'react';

import Header from './Header';
import Footer from './Footer';

/**
 * Application component. Just a wrapper.
 */
class App extends Component {
  render() {
    return (
      <div>
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
