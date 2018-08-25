import React from 'react';
import { shallow } from 'enzyme';

import PlaylistShare from './PlaylistShare';

describe('PlaylistShare component', () => {
  it('renders correctly', () => {
    const mockProps = {
      url: 'https://open.spotify.com/user/abc/playlist/123',
      name: 'Top 10 Tracks',
    };
    const wrapper = shallow(<PlaylistShare {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
