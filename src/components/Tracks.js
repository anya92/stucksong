import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import { fetchTracks } from '../actions';

class Tracks extends Component {
	fetchTracks() {
		if (this.props.tracks.length >= 50) {
			return;
		}
		this.props.fetchTracks(this.props.tracks.length);
	}

	render() {
		let tracks = [];
		this.props.tracks.map((track,i) => {
			tracks.push(
				<div key={i}> {/* bootstrap card */}
					<img src={track.image} alt={track.title} style={{ height: 'auto', width: '200px', margin: '5px' }} />
					{i+1}. {track.title} - <em>{track.artist}</em>
				</div>
			);
		});
		return (
			<div>
				<h1>Your Top Tracks</h1>
				<InfiniteScroll
					pageStart={0}
					loadMore={this.fetchTracks.bind(this)}
					hasMore={this.props.tracks.length <= 40}
					loader={<div className="loader">Loading ...</div>}
				>
					{tracks}
				</InfiniteScroll>
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
