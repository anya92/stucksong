import React from 'react';
import { shallow } from 'enzyme';

import { RecentlyPlayedTracks } from './RecentlyPlayedTracks';
import { recentlyPlayedTracks as tracks } from '../../assets/sampleData';

describe('RecentlyPlayedTracks component', () => {
  let fetchRecentlyPlayed;
  beforeEach(() => {
    fetchRecentlyPlayed = jest.fn();
  });

  it('renders with no data correctly', () => {
    const mockProps = {
      recentlyPlayedTracks: {
        tracks: [],
        hasMore: true,
        before: null,
        pending: false,
        error: false,
      },
      fetchRecentlyPlayed,
    };
    const wrapper = shallow(<RecentlyPlayedTracks {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with tracks data correctly', () => {
    const mockProps = {
      recentlyPlayedTracks: {
        tracks,
        hasMore: true,
        before: null,
        pending: false,
        error: false,
      },
      fetchRecentlyPlayed,
    };
    const wrapper = shallow(<RecentlyPlayedTracks {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with pending correctly', () => {
    const mockProps = {
      recentlyPlayedTracks: {
        tracks,
        hasMore: true,
        before: null,
        pending: true,
        error: false,
      },
      fetchRecentlyPlayed,
    };
    const wrapper = shallow(<RecentlyPlayedTracks {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with pending correctly', () => {
    const mockProps = {
      recentlyPlayedTracks: {
        tracks,
        hasMore: true,
        before: null,
        pending: false,
        error: 'Request failed',
      },
      fetchRecentlyPlayed,
    };
    const wrapper = shallow(<RecentlyPlayedTracks {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
