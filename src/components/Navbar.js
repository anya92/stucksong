import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			path: this.props.location.pathname
		};
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.location.pathname !== prevProps.location.pathname) {
			this.setState({
				path: this.props.location.pathname
			});
		}
	}

	render() {
		const { auth } = this.props;
		const { path } = this.state;
		return !auth ? <div></div> : (
			<div className="navbar-custom" ref={ref => (this.navbar = ref)}>
				<div className="navbar-custom__title">
					<Link to='/'>StuckSong</Link>
				</div>
				<div 
					className="navbar-custom__bars" 
					onClick={() => this.navbar.classList.toggle('open')}>
          <span className="navbar-custom__bars__bar"></span>
          <span className="navbar-custom__bars__bar"></span>
          <span className="navbar-custom__bars__bar"></span>
        </div>
								<div className="navbar-custom__user">
									<div className="navbar-custom__user__photo">
										{ auth.photo && <img src={auth.photo} alt={auth.username} /> }
									</div>
									<div className="navbar-custom__user__name">
										{auth.username}
									</div>
								</div>
								<div className="navbar-custom__links">
									<div className={`navbar-custom__links__link ${path === '/top-tracks' ? 'active' : ''}`} onClick={() => this.navbar.classList.remove('open')}>
										<Link to='/top-tracks'>Top Tracks</Link>
									</div>
									<div className={`navbar-custom__links__link ${path === '/top-artists' ? 'active' : ''}`} onClick={() => this.navbar.classList.remove('open')}>
										<Link to='/top-artists'>Top Artists</Link>
									</div>
									<div className={`navbar-custom__links__link ${path === '/recently-played' ? 'active' : ''}`} onClick={() => this.navbar.classList.remove('open')}>
										<Link to='/recently-played'>Recently Played</Link>
									</div>
									<div className={`navbar-custom__links__link ${path === '/create-playlist' ? 'active' : ''}`} onClick={() => this.navbar.classList.remove('open')}>
										<Link to='/create-playlist'>Create Playlist</Link>
									</div> <hr/>
									<div className='navbar-custom__links__link'>
										<a href="/auth/logout">Logout</a>
									</div>
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


export default connect(mapStateToProps)(Navbar);
