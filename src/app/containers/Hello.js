// React/Redux
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Components

// Actions
import { loadHello } from '../actions/hello';

/**
 * Renders retrieved question detail and user from api
 */
class Hello extends Component {
  // static needs = [loadHello];

  componentDidMount() {
    const { match, loadHello } = this.props;
    loadHello(match.params);
  }

  render() {
    return (
      <div>
        <h2>{ this.props.salute }</h2>
      </div>
    );
  }
}

Hello.propTypes = {
  salute: PropTypes.string.isRequired
};

function mapStateToProps (state) {
  return { salute: state.hello };
}

export { Hello }; // NOTE: For testing purposes
export default connect(mapStateToProps, { loadHello })(Hello);
