import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';
import {
  arrayOf,
  shape,
  string,
  func,
  bool,
} from 'prop-types';
import { fetchTracks } from '../actions';

import Card from './Card';
import {
  CardsGrid,
} from '../styles/cards';

const TopTracks = ({ tracks, fetchTracks, hasMore }) => (
  <CardsGrid>
    <InfiniteScroll
      pageStart={0}
      loadMore={() => fetchTracks(tracks.length)}
      hasMore={hasMore}
      loader={<div className="loader">Loading...</div>}
      threshold={500}
    >
      {
        tracks.map((track, i) => (
          <Card key={track.id} data={track} type="track" index={i} />
        ))
      }
    </InfiniteScroll>
  </CardsGrid>
);

TopTracks.propTypes = {
  tracks: arrayOf(shape({
    id: string.isRequired,
    title: string.isRequired,
    artist: string.isRequired,
    album: string.isRequired,
    image: string.isRequired,
  })).isRequired,
  fetchTracks: func.isRequired,
  hasMore: bool.isRequired,
};

function mapStateToProps(state) {
  return {
    tracks: state.tracks,
    hasMore: state.hasMoreTracks,
  };
}

export default connect(mapStateToProps, { fetchTracks })(TopTracks);
