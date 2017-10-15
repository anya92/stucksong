import React from 'react';
import background from '../assets/home-background.jpg';
const icon = require('../assets/icon.svg');

const Home = () => {
	return (
		<div className="home">
			<div className="home__background">
				<img src={background} alt="background-photo"/>
			</div>
			<div className="home__title">
				Stuck Song
			</div>
			{/*<div className="home__icon">
				<img src={icon} alt=""/>
			</div>
			<div className="home__description">
				Get your top tracks and artists
				<br/> Create a playlist of your top songs
			</div>*/}
			<div className="home__link">
				<a href="/auth/spotify"><i className="fa fa-spotify" aria-hidden="true" /> Log in with Spotify</a>
			</div>
		</div>
	);
};

export default Home;
