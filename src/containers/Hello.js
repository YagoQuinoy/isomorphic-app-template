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
  static needs = [loadHello];

  componentDidMount() {
    const { params, loadHello } = this.props;
    loadHello(params);
  }

  render() {
    const meh = this.props.salute;
    return (
      <div>
        <h2>{ meh }</h2>
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
