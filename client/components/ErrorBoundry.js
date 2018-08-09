import React, { Component } from 'react';
import { element } from 'prop-types';

import { ErrorContainer } from '../styles/error';

export default class ErrorBoundry extends Component {
  static propTypes = {
    children: element.isRequired,
  }

  state = {
    hasError: false,
    error: '',
  }

  componentDidCatch(error) {
    this.setState(() => ({ hasError: true, error: error.message }));
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <h1>Error <span role="img" aria-label="sad-emoji">😞</span></h1>
          <h2>Please try again later.</h2>
          <p>Additional info: {this.state.error}</p>
        </ErrorContainer>
      );
    }
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
