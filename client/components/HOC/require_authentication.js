import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  oneOfType,
  bool,
  object,
  shape,
  func,
} from 'prop-types';

export default function (ComposedComponent) {
  class Authentication extends Component {
    static propTypes = {
      auth: oneOfType([bool, object]).isRequired,
      history: shape({
        push: func,
      }).isRequired,
    }

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
      auth: state.auth,
    };
  }

  return connect(mapStateToProps)(Authentication);
}
