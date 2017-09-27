import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends Component {

	renderLinks() {
		switch(this.props.auth) {
		  case null:
				return;
			case false:
				return <a href="/auth/spotify">Login with Spotify</a>;	
			default:
				return (
					<div>
						<Link to="/tracks">Top Tracks</Link>
						<Link to="/artists">Top Artists</Link>
					</div>
				);
		}
	}

	render() {
		return (
			<div>
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
