import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import Tab from './Tab';

configure({ adapter: new Adapter() });

describe('Tab Component', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<Tab />);
  });

  it('should render new template successfully', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should render if classname is given', () => {
    wrapper.setProps({ className: 'fake-class' });
    expect(wrapper.prop('className')).toEqual('tabs_content fake-class');
  });
});
