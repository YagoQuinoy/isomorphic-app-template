// React/Redux
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Components
import SaluteForm from '../components/SaluteForm';

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
    const hello = this.props.hello;
    return (
      <div>
        <SaluteForm />
        <h2>{ hello }</h2>
      </div>
    );
  }
}

Hello.propTypes = {
  hello: PropTypes.object.isRequired
};

function mapStateToProps (state) {
  return { hello: state.hello };
}

export { Hello }; // NOTE: For testing purposes
export default connect(mapStateToProps, { loadHello })(Hello);
