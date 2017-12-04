import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <div className="home__background"/ >
      <div className="home__title">
        stucksong
      </div>
      <div className="home__description">
        Get your top tracks and artists
        <br/> Create a playlist of your top songs
      </div>
      <div className="home__link">
        <a href="/auth/spotify"><i className="fa fa-spotify" aria-hidden="true" />Login with Spotify</a>
      </div>
    </div>
  );
};

export default Home;
