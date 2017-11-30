import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';
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
    this.props.tracks.map((track, i)=> {
      tracks.push(
        <div className="card" key={track.id}>
          <div className="card__image">
            <div className="card__image__link">
              <a href={`https://open.spotify.com/track/${track.id}`} target="_blank">PLAY</a>
            </div>
            <img src={track.image} alt={track.title} />
          </div>
          <div className="card__block">
            <div className="card__block__title">
              <span>{i + 1}.</span> {track.title}
            </div>
            <div className="card__block__text">
              <div className="card__block__text__artist">{track.artist}</div>
              <div className="card__block__text__album">{track.album}</div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="site-title">Your Top Tracks</div>
          <InfiniteScroll
            className="cards"
            pageStart={0}
            loadMore={this.fetchTracks.bind(this)}
            hasMore={this.props.tracks.length <= 40 && this.props.hasMore}
            loader={<div className="loader">Loading...</div>}
            threshold={500}
          >
            {tracks}
          </InfiniteScroll>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tracks: state.tracks,
    hasMore: state.hasMoreTracks
  };
}

export default connect(mapStateToProps, { fetchTracks })(Tracks);
