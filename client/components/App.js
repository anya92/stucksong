import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'glamorous';
import {
  oneOfType,
  bool,
  object,
  func,
} from 'prop-types';

import { theme, Container } from '../styles/global';
import { fetchUser } from '../actions';

import Routes from './Routes';
import ErrorBoundry from './Error/ErrorBoundry';

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export class App extends Component {
  static propTypes = {
    auth: oneOfType([bool, object]),
    fetchUser: func.isRequired,
  }

  static defaultProps = {
    auth: null,
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { auth } = this.props;
    if (auth === null) return <div />;
    return (
      <ThemeProvider theme={theme}>
        <ErrorBoundry>
          <Container>
            <Routes auth={auth} />
          </Container>
        </ErrorBoundry>
      </ThemeProvider>
    );
  }
}

export default connect(mapStateToProps, { fetchUser })(App);
