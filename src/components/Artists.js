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
		this.props.artists.map((artist, i) => {
			let genres = '';
			artist.genres.slice(0, 3).forEach(genre => genres += `${genre}, `);
			genres = genres.slice(0, -2);
			artists.push(
				<div className="card" key={artist.id}>
					<a href={`https://open.spotify.com/artist/${artist.id}`} target="_blank">
						<div className="card__image">
							<img src={artist.image} alt={artist.name} />
						</div>
						<div className="card__block">
							<div className="card__block__title">
								{i + 1}. {artist.name}
							</div>
							<div className="card__block__genres">
								<p>{genres}</p>
							</div>
						</div>
					</a>
				</div>
			);
		});
		return (
			<div className="container">
				<h1>Your Top Artists</h1>
					<InfiniteScroll
						className="cards"
						pageStart={0}
						loadMore={this.fetchArtists.bind(this)}
						hasMore={this.props.artists.length <= 40 && this.props.hasMore}
						loader={<div className="loader">Loading...</div>}
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
		hasMore: state.hasMoreArtists
	};
}

export default connect(mapStateToProps, { fetchArtists })(Artists);
