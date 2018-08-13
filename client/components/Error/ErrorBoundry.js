import React, { Component } from 'react';
import { element, func, oneOfType } from 'prop-types';
import Loadable from '../HOC/Loadable';

const AsyncError = Loadable({
  loader: () => import('./ErrorComponent'),
});

export default class ErrorBoundry extends Component {
  static propTypes = {
    children: oneOfType([element, func]).isRequired,
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
        <AsyncError error={this.state.error} />
      );
    }
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
