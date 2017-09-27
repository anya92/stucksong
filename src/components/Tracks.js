import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTracks } from '../actions';

class Tracks extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			
		};
	}

	componentDidMount() {
		this.props.fetchTracks();
	}

	fetchMoreTracks() {
		if (this.props.tracks.length >= 50) {
			return;
		}
		console.log('fetch more', this.props.tracks.length);
		this.props.fetchTracks(this.props.tracks.length);
	}

	render() {
		return !this.props.tracks ? <div></div> : (
			<div>
				<h1>Your Top Tracks</h1>
				{
					this.props.tracks.map((track, i) => {
						return (
							<div key={i}>
								{i+1}. {track.title} - <em>{track.artist}</em>
							</div>
						);
					})
				}
				<button className="btn btn-default" onClick={() => this.fetchMoreTracks()}>Get more</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		tracks: state.tracks
	};
}

export default connect(mapStateToProps, { fetchTracks })(Tracks);
