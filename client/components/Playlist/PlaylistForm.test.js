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

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls handleChange on name change', () => {
    const e = {
      target: {
        value: 'Top 10',
      },
    };
    wrapper.find('#playlist-name').simulate('change', e);
    expect(handleChange).toHaveBeenLastCalledWith('name', 'Top 10');
  });

  it('calls handleChange on description change', () => {
    const e = {
      target: {
        value: 'My top 10 songs',
      },
    };
    wrapper.find('#playlist-description').simulate('change', e);
    expect(handleChange).toHaveBeenLastCalledWith('description', 'My top 10 songs');
  });

  it('calls handleChange on number of tracks change', () => {
    const e = {
      target: {
        value: 10,
      },
    };
    wrapper.find('#playlist-number-of-tracks').simulate('change', e);
    expect(handleChange).toHaveBeenLastCalledWith('numberOfTracks', 10);
  });

  it('calls createPlaylist on form submit', () => {
    wrapper.find('form').simulate('submit');
    expect(createPlaylist).toHaveBeenCalled();
  });
});
