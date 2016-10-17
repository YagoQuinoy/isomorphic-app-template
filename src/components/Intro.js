// React/Redux
import React, { Component } from 'react';
import { Link } from 'react-router';

/**
 * Default root component. Shows a link to questions. It could ve a component.
 */
class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <h1>Intro Page</h1>
        <Link to="/questions">to question</Link>
      </div>
    );
  }
}

export default Intro;
