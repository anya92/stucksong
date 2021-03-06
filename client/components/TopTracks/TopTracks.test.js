import React from 'react';
import { shallow } from 'enzyme';

import { TopTracks } from './TopTracks';
import { topTracks as tracks } from '../../assets/sampleData';

describe('TopTracks component', () => {
  let fetchTracks;
  beforeEach(() => {
    fetchTracks = jest.fn();
  });

  it('renders with no data correctly', () => {
    const mockProps = {
      topTracks: {
        tracks: [],
        hasMore: true,
        pending: false,
        error: false,
      },
      fetchTracks,
    };
    const wrapper = shallow(<TopTracks {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with tracks data correctly', () => {
    const mockProps = {
      topTracks: {
        tracks,
        hasMore: true,
        pending: false,
        error: false,
      },
      fetchTracks,
    };
    const wrapper = shallow(<TopTracks {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with pending correctly', () => {
    const mockProps = {
      topTracks: {
        tracks,
        hasMore: true,
        pending: true,
        error: false,
      },
      fetchTracks,
    };
    const wrapper = shallow(<TopTracks {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with pending correctly', () => {
    const mockProps = {
      topTracks: {
        tracks,
        hasMore: true,
        pending: false,
        error: 'Request failed',
      },
      fetchTracks,
    };
    const wrapper = shallow(<TopTracks {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
