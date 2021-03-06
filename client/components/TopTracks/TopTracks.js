import React from 'react';
import { connect } from 'react-redux';
import {
  arrayOf,
  shape,
  string,
  func,
  bool,
  oneOfType,
} from 'prop-types';
import { fetchTracks } from '../../actions';

import InfiniteScroll from '../InfiniteScroll/InfiniteScroll';
import Card from '../Card/Card';

import { CardsGrid } from '../../styles/cards';
import Loader from '../../styles/loader';
import NoData from '../NoData/NoData';
import Loadable from '../HOC/Loadable';

const AsyncError = Loadable({
  loader: () => import('../Error/ErrorComponent'),
});

export const TopTracks = ({
  topTracks: {
    tracks,
    hasMore,
    pending,
    error,
  },
  fetchTracks,
}) => {
  if (error) return <AsyncError error={error} />;
  return (
    <CardsGrid>
      { (!pending && tracks.length === 0) && <NoData /> }
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
};

TopTracks.propTypes = {
  topTracks: shape({
    pending: bool.isRequired,
    error: oneOfType([bool, string]).isRequired,
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
