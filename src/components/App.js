import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route, 
	Link
} from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchUser, getCurrentlyPlaying } from '../actions';

import requireAuth from './require_authentication';
import Navbar from './Navbar';
import Home from './Home';
import Tracks from './Tracks';
import Artists from './Artists';
import CreatePlaylist from './CreatePlaylist';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
		this.props.getCurrentlyPlaying();
	}

	render() {
		return this.props.auth === null ? <div className="loading"></div> : (
			<div>
				<Router>
					<div>
						<Navbar auth={this.props.auth} />
						<Route exact path='/' component={Home} />
						<Route path='/tracks' component={requireAuth(Tracks)} />
						<Route path='/artists' component={requireAuth(Artists)} />
						<Route path='/playlist' component={requireAuth(CreatePlaylist)} />
					</div>
				</Router>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth
	};
}

export default connect(mapStateToProps, { fetchUser, getCurrentlyPlaying })(App);
