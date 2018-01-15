import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import { fetchArtists } from '../actions';

class Artists extends Component {
	fetchArtists() {
		// if (this.props.artists.length >= 50) {
		// 	return;
		// }
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
					<div className="card__image">
						<div className="card__image__link">
							<a href={`https://open.spotify.com/artist/${artist.id}`} target="_blank">OPEN</a>
						</div>
						<img src={artist.image} alt={artist.name} />
					</div>
					<div className="card__block">
						<div className="card__block__title">
							<span>{i + 1}.</span> {artist.name}
						</div>
						<div className="card__block__genres">
							{genres}
						</div>
					</div>
				</div>
			);
		});
		return (
			<div className="container">
				<div className="site-title">Your Top Artists</div>
					<InfiniteScroll
						className="cards"
						pageStart={0}
						loadMore={this.fetchArtists.bind(this)}
						hasMore={this.props.hasMore}
						// hasMore={this.props.artists.length <= 40 && this.props.hasMore}
						loader={<div className="loader">Loading...</div>}
						threshold={500}
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
