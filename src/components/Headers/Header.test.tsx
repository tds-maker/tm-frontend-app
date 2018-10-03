import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import Header from './Header';

configure({ adapter: new Adapter() });

describe('Header Route Component', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('should render header successfully', () => {
    expect(wrapper.exists()).toEqual(true);
    expect(wrapper.type()).toEqual('header');
    expect(wrapper.prop('className')).toEqual('tm-header');
  });

  it('should have container div', () => {
    expect(wrapper.childAt(0).type()).toEqual('div');
    expect(wrapper.childAt(0).prop('className')).toEqual('container clearfix');
  });

  it('shoud render logo', () => {
    const logoAnchor = wrapper.find('.logo');
    expect(logoAnchor.exists()).toEqual(true);
    expect(logoAnchor.children().length).toEqual(1);
    expect(logoAnchor.childAt(0).type()).toEqual('img');
  });
});
