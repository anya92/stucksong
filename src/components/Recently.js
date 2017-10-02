import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import moment from 'moment';
import { connect } from 'react-redux';
import { fetchRecentlyPlayed } from '../actions';

class Recently extends Component {
	fetchRecentlyPlayed() {
		if (this.props.tracks.length >= 50) {
			return;
		}
		const before = this.props.before || Date.now();
		this.props.fetchRecentlyPlayed(before);
	}

	render() {
		let tracks = [];
		this.props.tracks.map((track, i)=> {
			tracks.push(
				<div className="card" key={i}>
					<a href={`https://open.spotify.com/track/${track.id}`} target="_blank">
						<div className="card__image">
							<div className="card__image__date">{moment(track.played_at).format('DD MMM - HH:mm')}</div>
							<img src={track.image} alt={track.title} />
						</div>
						<div className="card__block">
							<div className="card__block__title">
								{track.title}
							</div>
							<div className="card__block__text">
								<div className="card__block__text__artist">
									{track.artist}
								</div>
								<div className="card__block__text__album">
									{track.album}
								</div>
							</div>
						</div>
					</a>
				</div>
			);
		});
		return (
			<div className="container">
        <h1>Recently Played Tracks</h1>
       	<InfiniteScroll
					className="cards"
					pageStart={0}
					loadMore={this.fetchRecentlyPlayed.bind(this)}
					hasMore={this.props.tracks.length <= 40 && this.props.hasMore}
					loader={
						<div className="loader">Loading...</div>
					}
				>
					{tracks}
				</InfiniteScroll>
      </div>
		);
	}
}

function mapStateToProps(state) {
	return {
		tracks: state.recentlyPlayedTracks,
		hasMore: state.hasMoreRecentlyPlayedTracks, 
		before: state.recentlyPlayedBefore
	};
}

export default connect(mapStateToProps, { fetchRecentlyPlayed })(Recently);
