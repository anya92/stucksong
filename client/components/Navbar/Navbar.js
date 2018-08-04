import React, { Component } from 'react';
import { oneOfType, bool, object } from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

import {
  Container,
  Brand,
  Bars,
  Links,
  LogoutLink,
} from '../../styles/navbar';

class Navbar extends Component {
  links = [
    { id: 0, link: 'top-tracks', name: 'tracks' },
    { id: 1, link: 'top-artists', name: 'artists' },
    { id: 2, link: 'recently-played', name: 'recently played' },
    { id: 3, link: 'create-playlist', name: 'create a playlist' },
  ]

  state = {
    open: false,
  }

  handleMenuClick = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  }

  handleLinkClick = () => {
    this.setState(() => ({ open: false }));
  }

  render() {
    const { auth } = this.props;
    if (!auth) return <div />;
    return (
      <Container id="nav" open={this.state.open}>
        <Brand onClick={this.handleLinkClick}>
          <Link to="/">stuck<span>Song</span></Link>
        </Brand>
        <Bars className="mobile-menu" onClick={this.handleMenuClick}>
          <span />
        </Bars>
        <Links className="navbar-links">
          {
            this.links.map(({ id, link, name }) => (
              <NavLink
                key={id}
                to={`/${link}`}
                activeClassName="active"
                onClick={this.handleLinkClick}
              >{name}
              </NavLink>
            ))
          }
        </Links>
        <LogoutLink className="logout-link">
          <a href="/auth/logout">logout</a>
        </LogoutLink>
      </Container>
    );
  }
}

Navbar.propTypes = {
  auth: oneOfType([bool, object]).isRequired,
};

export default Navbar;
