import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authentication extends Component {
    componentDidMount() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
      window.scrollTo(0, 0);
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      auth: state.auth
    };
  }

  return connect(mapStateToProps)(Authentication);
}
