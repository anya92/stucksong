import React from 'react';
import { shallow } from 'enzyme';

import InfiniteScroll from './InfiniteScroll';

describe('InfiniteScroll component', () => {
  let wrapper;
  let loadMore;

  beforeEach(() => {
    loadMore = jest.fn();
    const mockProps = {
      children: React.createElement('div'),
      isLoading: false,
      hasMore: true,
      loadMore,
    };
    wrapper = shallow(<InfiniteScroll {...mockProps} />);
  });

  it('loads data in componentDidMount', () => {
    expect(loadMore).toHaveBeenCalledTimes(1);
  });

  it('calls loadMore function on scroll event if there is more data', () => {
    wrapper.instance().onScroll();
    expect(loadMore).toHaveBeenCalledTimes(2);
    wrapper.setProps({ hasMore: false });
    wrapper.instance().onScroll();
    expect(loadMore).toHaveBeenCalledTimes(2);
  });
});
