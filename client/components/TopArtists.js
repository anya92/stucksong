import React from 'react';
import { connect } from 'react-redux';
import {
  arrayOf,
  shape,
  string,
  func,
  bool,
} from 'prop-types';

import { fetchArtists } from '../actions';

import InfiniteScroll from './InfiniteScroll';
import Card from './Card';

import { CardsGrid } from '../styles/cards';
import Loader from '../styles/loader';

const TopArtists = ({
  topArtists: {
    artists,
    pending,
    hasMore,
    error,
  },
  fetchArtists,
}) => (
  <CardsGrid>
    <InfiniteScroll
      loadMore={() => fetchArtists(artists.length)}
      isLoading={pending}
      hasMore={hasMore}
    >
      <React.Fragment>
        { artists.length > 0 && <h1>Your Top Artists</h1> }
        {
          artists.map((artist, i) => (
            <Card key={artist.id} data={artist} type="artist" index={i} />
          ))
        }
        { pending && <Loader>Loading...</Loader> }
      </React.Fragment>
    </InfiniteScroll>
  </CardsGrid>
);

TopArtists.propTypes = {
  topArtists: shape({
    pending: bool.isRequired,
    error: bool.isRequired,
    hasMore: bool.isRequired,
    artists: arrayOf(shape({
      id: string.isRequired,
      name: string.isRequired,
      image: string.isRequired,
      genres: arrayOf(string).isRequired,
      uri: string.isRequired,
    })).isRequired,
  }).isRequired,
  fetchArtists: func.isRequired,
};


function mapStateToProps(state) {
  return {
    topArtists: state.topArtists,
  };
}

export default connect(mapStateToProps, { fetchArtists })(TopArtists);
