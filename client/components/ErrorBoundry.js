import React, { Component } from 'react';
import { element } from 'prop-types';

export default class ErrorBoundry extends Component {
  static propTypes = {
    children: element.isRequired,
  }

  state = {
    hasError: false,
  }

  componentDidCatch() {
    this.setState(() => ({ hasError: true }));
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>Something bad happened :( Try again later.</div>
      );
    }
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
