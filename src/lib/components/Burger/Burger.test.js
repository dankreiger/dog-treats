import React from 'react';
import { shallow } from 'enzyme';

import Burger from './Burger';

describe('Burger', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Burger />);
  });

  test('rendering', () => {
    expect(wrapper.length).toBe(1);
  });
});
