import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';
import { fetchRecentlyPlayed } from '../actions';

import Card from './Card';
import {
  CardsGrid,
} from '../styles/cards';

const RecentlyPlayed = (props) => {
  const fetchData = () => {
    // if (this.props.tracks.length >= 50) {
    // return;
    // }
    const before = props.before || Date.now();
    props.fetchRecentlyPlayed(before);
  };

  return (
    <CardsGrid>
      <InfiniteScroll
        pageStart={0}
        loadMore={fetchData}
        hasMore={props.tracks.length <= 40 && props.hasMore}
        loader={<div className="loader">Loading...</div>}
        threshold={500}
      >
        {
          props.tracks.map((track, i) => (
            <Card key={`${track.id}_${i}`} data={track} type="recently-track" index={i} />
          ))
        }
      </InfiniteScroll>
    </CardsGrid>
  );
}

function mapStateToProps(state) {
  return {
    tracks: state.recentlyPlayedTracks,
    hasMore: state.hasMoreRecentlyPlayedTracks,
    before: state.recentlyPlayedBefore,
  };
}

export default connect(mapStateToProps, { fetchRecentlyPlayed })(RecentlyPlayed);
