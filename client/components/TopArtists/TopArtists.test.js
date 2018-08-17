import React from 'react';
import { shallow } from 'enzyme';

import { TopArtists } from './TopArtists';
import { topArtists as artists } from '../../assets/sampleData';

describe('TopArtists component', () => {
  let fetchArtists;
  beforeEach(() => {
    fetchArtists = jest.fn();
  });

  it('renders TopArtists with no data correctly', () => {
    const mockProps = {
      topArtists: {
        artists: [],
        hasMore: true,
        pending: false,
        error: false,
      },
      fetchArtists,
    };
    const wrapper = shallow(<TopArtists {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders TopArtists with artists correctly', () => {
    const mockProps = {
      topArtists: {
        artists,
        hasMore: true,
        pending: false,
        error: false,
      },
      fetchArtists,
    };
    const wrapper = shallow(<TopArtists {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders TopArtists with pending correctly', () => {
    const mockProps = {
      topArtists: {
        artists,
        hasMore: true,
        pending: true,
        error: false,
      },
      fetchArtists,
    };
    const wrapper = shallow(<TopArtists {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders TopArtists with pending correctly', () => {
    const mockProps = {
      topArtists: {
        artists,
        hasMore: true,
        pending: false,
        error: 'Request failed',
      },
      fetchArtists,
    };
    const wrapper = shallow(<TopArtists {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
