import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route, 
	Link
} from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchUser,
	// fetchCurrentlyPlaying 
} from '../actions';

import requireAuth from './require_authentication';
import Navbar from './Navbar';
import Home from './Home';
import Tracks from './Tracks';
import Artists from './Artists';
import Recently from './Recently';
import CreatePlaylist from './CreatePlaylist';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
		// this.props.fetchCurrentlyPlaying();
	}

	render() {
		return this.props.auth === null ? <div className="loading"></div> : (
			<div>
				<Router>
					<div>
						<Route component={Navbar} />
						<Route exact path='/' component={Home} />
						<Route path='/top-tracks' component={requireAuth(Tracks)} />
						<Route path='/top-artists' component={requireAuth(Artists)} />
						<Route path='/recently-played' component={requireAuth(Recently)} />
						<Route path='/create-playlist' component={requireAuth(CreatePlaylist)} />
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

export default connect(mapStateToProps, { fetchUser })(App);
