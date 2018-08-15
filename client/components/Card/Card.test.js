import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card';
import * as data from '../../assets/sampleData';

describe('Card component', () => {
  it('renders Card with top track data correctly', () => {
    const mockProps = {
      data: data.topTracks[0],
      type: 'track',
      index: 0,
    };
    const wrapper = shallow(<Card {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Card with top artist data correctly', () => {
    const mockProps = {
      data: data.topArtists[0],
      type: 'artist',
      index: 0,
    };
    const wrapper = shallow(<Card {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Card with recently played track data correctly', () => {
    const mockProps = {
      data: data.recentlyPlayedTracks[0],
      type: 'recently-track',
      index: 0,
    };
    const wrapper = shallow(<Card {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
