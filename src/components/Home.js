import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends Component {

	renderLinks() {
		switch(this.props.auth) {
		  case null:
				return;
			case false:
				return (
					<div className="home__links">
						<a href="/auth/spotify" className="home__links__link">
							Login with Spotify
						</a>
					</div>
				); 
					
			default:
				return (
					<div className="home__links">
						<Link to="/top-tracks" className="home__links__link">Top Tracks</Link>
						<Link to="/top-artists" className="home__links__link">Top Artists</Link>
						<Link to="/recently-played" className="home__links__link">Recently Played</Link>
						<Link to='/create-playlist' className="home__links__link">Create Playlist</Link>
						<a href="/auth/logout" className="home__links__link">Logout</a>
					</div>
				);
		}
	}

	render() {
		return (
			<div className="home">
				{ this.renderLinks() }
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth
	};
}

export default connect(mapStateToProps)(Home);
