import React, { Component } from 'react';
import {
  bool,
  func,
  node,
  oneOfType,
  arrayOf,
} from 'prop-types';

export default class InfiniteScroll extends Component {
  static propTypes = {
    children: oneOfType([
      arrayOf(node),
      node,
    ]).isRequired,
    hasMore: bool.isRequired,
    isLoading: bool.isRequired,
    loadMore: func.isRequired,
  }

  componentDidMount = () => {
    if (this.props.hasMore) {
      this.props.loadMore();
    }
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const {
      isLoading,
      hasMore,
      loadMore,
    } = this.props;
    if (isLoading || !hasMore) return;
    if (window.innerHeight + document.documentElement.scrollTop
      >= document.documentElement.offsetHeight - 500) {
      loadMore();
    }
  }

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}
