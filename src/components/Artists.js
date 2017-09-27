import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import { fetchArtists } from '../actions';

class Artists extends Component {
	fetchArtists() {
		if (this.props.artists.length >= 50) {
			return;
		}
		this.props.fetchArtists(this.props.artists.length);
	}

	render() {
		let artists = [];
		this.props.artists.map((artist,i) => {
			artists.push(
				<div key={i}> {/* bootstrap card */}
					<img src={artist.image} alt={artist.name} style={{ height: 'auto', width: '200px', margin: '5px' }} />
					{i+1}. {artist.name}
					<span>{JSON.stringify(artist.genres, null, ' ')}</span>
				</div>
			);
		});
		return (
			<div>
				<h1>Your Top Artists</h1>
				<InfiniteScroll
					pageStart={0}
					loadMore={this.fetchArtists.bind(this)}
					hasMore={this.props.artists.length <= 40 && this.props.next}
					loader={<div className="loader">Loading ...</div>}
				>
					{artists}
				</InfiniteScroll>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		artists: state.artists,
		next: state.next
	};
}

export default connect(mapStateToProps, { fetchArtists })(Artists);
