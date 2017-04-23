// Libs
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Actions
import { loadHello } from '../actions/hello'

/**
 * Renders retrieved question detail and user from api
 */
class Hello extends Component {
  static needs = [loadHello]

  componentDidMount() {
    const { params, loadHello } = this.props
    loadHello(params).then(() => {
      console.log('qué rico')
    })
  }

  render() {
    console.log('Lo que quieres de verdad')
    return (
      <div>
        <h2>{ this.props.salute }</h2>
      </div>
    )
  }
}

Hello.propTypes = {
  salute: PropTypes.string.isRequired
}

function mapStateToProps (state) {
  return {
    salute: state.hello || 'feck'
  }
}

export { Hello } // NOTE: For testing purposes
export default connect(mapStateToProps, { loadHello })(Hello)
