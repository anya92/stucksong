import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchUser } from '../actions';

import requireAuth from './require_authentication';
import Navbar from './Navbar';
import Home from './Home';
import Tracks from './Tracks';
import Artists from './Artists';

class App extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			
		};
	}
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return this.props.auth === null ? <div>Loading</div> : (
			<div>
				<Router>
					<div className="container">
						<Link to='/'>Home</Link>
						<Route exact path='/' component={Home} />
						<Route path='/tracks' component={requireAuth(Tracks)} />
						<Route path='/artists' component={Artists} />
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
