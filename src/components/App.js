// React/Redux
import React, { Component, PropTypes } from 'react';

/**
 * Application component. Just a wrapper.
 */
class App extends Component {
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

export default App;
