// React/Redux
import React, { Component } from 'react';
import { Link } from 'react-router';

/**
 * Default root component. Shows a link to questions. It could ve a component.
 */
class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Isomorphic App Template</h1>
      </div>
    );
  }
}

export default Header;
