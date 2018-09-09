import React from 'react';
import { shallow } from 'enzyme';

import { CreatePlaylist } from './CreatePlaylist';
import { playlist } from '../../assets/sampleData';

describe('CreatePlaylist component', () => {
  let wrapper;
  let createPlaylist;
  beforeEach(() => {
    createPlaylist = jest.fn();
    const mockProps = {
      auth: {
        username: 'user',
      },
      playlist: {
        playlist: null,
        pending: false,
        error: false,
      },
      createPlaylist,
    };
    wrapper = shallow(<CreatePlaylist {...mockProps} />);
  });

  it('renders PlaylistForm correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Playlist component correctly', () => {
    wrapper.setProps({
      playlist: {
        playlist,
        pending: false,
        error: false,
      },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with pending correctly', () => {
    wrapper.setProps({
      playlist: {
        playlist: null,
        pending: true,
        error: false,
      },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with error correctly', () => {
    wrapper.setProps({
      playlist: {
        playlist: null,
        pending: false,
        error: 'Request failed',
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
