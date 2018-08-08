import React from 'react';
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

import InfiniteScroll from './InfiniteScroll';
import Card from './Card';

import { CardsGrid } from '../styles/cards';
import Loader from '../styles/loader';

const RecentlyPlayedTracks = ({
  recentlyPlayedTracks: {
    pending,
    hasMore,
    before,
    tracks,
    error,
  },
  fetchRecentlyPlayed,
}) => (
  <CardsGrid>
    {
      error
        ? <div>{error}</div>
        : (
          <InfiniteScroll
            loadMore={() => fetchRecentlyPlayed(before)}
            isLoading={pending}
            hasMore={hasMore}
          >
            <React.Fragment>
              { tracks.length > 0 && <h1>Your Recently Played Tracks</h1> }
              {
                tracks.map((track, i) => (
                  <Card key={`${track.id}_${i}`} data={track} type="recently-track" index={i} />
                ))
              }
              { pending && <Loader>Loading...</Loader> }
            </React.Fragment>
          </InfiniteScroll>
        )
    }
  </CardsGrid>
);

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
