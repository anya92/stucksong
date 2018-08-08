import React from 'react';
import { connect } from 'react-redux';
import {
  arrayOf,
  shape,
  string,
  func,
  bool,
} from 'prop-types';
import { fetchTracks } from '../actions';

import InfiniteScroll from './InfiniteScroll';
import Card from './Card';

import { CardsGrid } from '../styles/cards';
import Loader from '../styles/loader';

const TopTracks = ({
  topTracks: {
    tracks,
    hasMore,
    pending,
    error,
  },
  fetchTracks,
}) => (
  <CardsGrid>
    <InfiniteScroll
      loadMore={() => fetchTracks(tracks.length)}
      isLoading={pending}
      hasMore={hasMore}
    >
      <React.Fragment>
        { tracks.length > 0 && <h1>Your Top Tracks</h1> }
        {
          tracks.map((track, i) => (
            <Card key={`${track.id}${i}`} data={track} type="track" index={i} />
          ))
        }
        { pending && <Loader>Loading...</Loader> }
      </React.Fragment>
    </InfiniteScroll>
  </CardsGrid>
);


TopTracks.propTypes = {
  topTracks: shape({
    pending: bool.isRequired,
    error: bool.isRequired,
    hasMore: bool.isRequired,
    tracks: arrayOf(shape({
      id: string.isRequired,
      title: string.isRequired,
      artist: string.isRequired,
      album: string.isRequired,
      image: string.isRequired,
    })).isRequired,
  }).isRequired,
  fetchTracks: func.isRequired,
};

function mapStateToProps(state) {
  return {
    topTracks: state.topTracks,
  };
}

export default connect(mapStateToProps, { fetchTracks })(TopTracks);
