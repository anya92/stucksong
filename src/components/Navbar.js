import React from 'react';

const Navbar = ({ auth }) => {
  const renderLinks = () => {
    switch(auth) {
      case null:
        return;        
      case false:
        return <a href="/auth/spotify">Login with Spotify</a>
      default:
        return <a href="/api/logout">Log Out</a>
    }
  }
  return (
    <div>
      { renderLinks() }
    </div>
  );
};

export default Navbar;
