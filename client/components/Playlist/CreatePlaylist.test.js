import React from 'react';
import { shallow } from 'enzyme';

import { CreatePlaylist } from './CreatePlaylist';

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

  it('renders CreatePlaylist with PlaylistForm correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
