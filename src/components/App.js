import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions';

import Routes from './Routes';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return <Routes auth={this.props.auth} />;
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { fetchUser })(App);
