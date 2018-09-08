import React from 'react';
import { shallow } from 'enzyme';

import Playlist from './Playlist';
import { playlist } from '../../assets/sampleData';

describe('PLaylist component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Playlist playlist={playlist} />);
    expect(wrapper).toMatchSnapshot();
  });
});
