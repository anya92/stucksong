import React from 'react';
import { shallow } from 'enzyme';

import PlaylistForm from './PlaylistForm';

describe('PlaylistForm component', () => {
  let wrapper;
  let handleChange;
  let createPlaylist;

  beforeEach(() => {
    handleChange = jest.fn();
    createPlaylist = jest.fn();
    const mockProps = {
      name: '',
      description: '',
      numberOfTracks: 25,
      handleChange,
      createPlaylist,
    };
    wrapper = shallow(<PlaylistForm {...mockProps} />);
  });

  it('renders PlaylistForm correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
