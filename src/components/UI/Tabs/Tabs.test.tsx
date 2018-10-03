import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import Tab from './Tab';
import Tabs from './Tabs';

configure({ adapter: new Adapter() });

describe('Tabs Route Component', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(
      <Tabs activeTab={0}>
        <Tab header="tab - 1">Tab content 1</Tab>
        <Tab header="tab - 2">Tab content 2</Tab>
      </Tabs>
    );
  });

  it('should render tab component successfully', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should have tab headers', () => {
    const headers = wrapper.childAt(0);
    expect(headers.exists()).toEqual(true);
    expect(headers.prop('className')).toEqual('main-tabs');

    const ulList = headers.childAt(0);
    expect(ulList.exists()).toEqual(true);
    expect(ulList.children().length).toEqual(2);
  });

  it('should set only selected active tab header', () => {
    const ulList = wrapper.childAt(0).childAt(0);
    expect(ulList.childAt(0).prop('className')).toEqual('active');
    expect(ulList.childAt(1).prop('className')).toEqual('');
  });

  it('should set active header when active tab changed', () => {
    wrapper.setProps({ activeTab: 1 });
    const ulList = wrapper.childAt(0).childAt(0);
    expect(ulList.childAt(0).prop('className')).toEqual('');
    expect(ulList.childAt(1).prop('className')).toEqual('active');
  });

  it('should render active tab body', () => {
    const body = wrapper.childAt(1);

    expect(body.children().length).toEqual(1);
    expect(body.props().className).toEqual('tabs');
    expect(body.childAt(0).props().header).toEqual('tab - 1');
    expect(body.childAt(0).props().children).toEqual('Tab content 1');
  });

  it('should run tabClicked event', () => {
    const firstHeader = wrapper
      .find('.main-tabs')
      .first()
      .childAt(0)
      .childAt(0);
    const clickMock = jest.fn();

    wrapper.setProps({
      onTabClicked: clickMock,
      activeTab : 2
    });

    expect(clickMock.mock.calls.length).toEqual(0);
    firstHeader.simulate('click');
    expect(clickMock.mock.calls.length).toEqual(1);
    expect(clickMock.mock.calls[0][0]).toEqual(0);
  });
});
