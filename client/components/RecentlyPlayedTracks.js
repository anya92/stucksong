import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';
import {
  arrayOf,
  shape,
  string,
  func,
  bool,
  object,
  oneOfType,
} from 'prop-types';

import { fetchRecentlyPlayed } from '../actions';

import Card from './Card';
import {
  CardsGrid,
  Title,
} from '../styles/cards';

class RecentlyPlayedTracks extends Component {
  componentDidMount = () => {
    const before = Date.now();
    this.props.fetchRecentlyPlayed(before);
  }

  render() {
    const {
      pending,
      hasMore,
      before,
      tracks,
    } = this.props.recentlyPlayedTracks;
    return (
      <CardsGrid>
        <Title>Recently Played Tracks</Title>
        <InfiniteScroll
          initialLoad={false}
          loadMore={() => this.props.fetchRecentlyPlayed(before)}
          hasMore={!pending && hasMore}
          loader={<div className="loader">Loading...</div>}
          threshold={250}
        >
          {
            tracks.map((track, i) => (
              <Card key={`${track.id}_${i}`} data={track} type="recently-track" index={i} />
            ))
          }
        </InfiniteScroll>
      </CardsGrid>
    );
  }
}

RecentlyPlayedTracks.propTypes = {
  recentlyPlayedTracks: shape({
    pending: bool.isRequired,
    error: oneOfType([bool, string]).isRequired,
    hasMore: bool.isRequired,
    before: oneOfType([string, object]),
    tracks: arrayOf(shape({
      album: string.isRequired,
      artist: string.isRequired,
      id: string.isRequired,
      image: string.isRequired,
      played_at: string.isRequired,
      title: string.isRequired,
      uri: string.isRequired,
    })).isRequired,
  }).isRequired,
  fetchRecentlyPlayed: func.isRequired,
};

function mapStateToProps(state) {
  return {
    recentlyPlayedTracks: state.recentlyPlayedTracks,
  };
}

export default connect(mapStateToProps, { fetchRecentlyPlayed })(RecentlyPlayedTracks);
