// React/Redux
import React, { Component } from 'react';

/**
 * Default root component. Shows a link to questions. It could ve a component.
 */
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a href="mailto:mymail@foo.com">mymail@foo.com</a>
      </div>
    );
  }
}

export default Footer;
