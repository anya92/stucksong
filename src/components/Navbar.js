import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ auth }) => {
  if (!auth) {
    return <div />;
  }
  const handleMenu = () => document.querySelector('.navbar').classList.toggle('open');
  return !auth ? <div /> : (
    <div className="navbar">
      <div className="navbar__title">
        <Link to='/'>stuck<span>Song</span></Link>
      </div>
      <div 
        className="navbar__bars" 
        onClick={handleMenu}
      >
        <span className="navbar__bars__middle" />
      </div>
      <div className="navbar__links">
        <NavLink 
          to='/top-tracks' 
          className='navbar__links__link' 
          activeClassName='active'>
          tracks
        </NavLink>
        <NavLink 
          to='/top-artists' 
          className='navbar__links__link' 
          activeClassName='active'>
          artists
        </NavLink>
        <NavLink 
          to='/recently-played' 
          className='navbar__links__link' 
          activeClassName='active'>
          recently played
        </NavLink>
        <NavLink 
          to='/create-playlist' 
          className='navbar__links__link' 
          activeClassName='active'>
          create a playlist
        </NavLink>
      </div>
      <div className="navbar__logout">
        <a href='/auth/logout'>logout</a>
      </div>
    </div>
  );
};

export default Navbar;
