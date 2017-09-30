import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends Component {

	renderLinks() {
		switch(this.props.auth) {
		  case null:
				return;
			case false:
				return <a href="/auth/spotify" className="home__links__link">Login with Spotify</a>;
			default:
				return (
					<div>
						<Link to="/tracks" className="home__links__link">Top Tracks</Link>
						<Link to="/artists" className="home__links__link">Top Artists</Link>
						<Link to='/playlist' className="home__links__link">Create Playlist</Link>
						<a href="/auth/logout" className="home__links__link">Logout</a>
					</div>
				);
		}
	}

	render() {
		return (
			<div className="home container">
				<div className="home__links">
					{ this.renderLinks() }
				</div>
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
