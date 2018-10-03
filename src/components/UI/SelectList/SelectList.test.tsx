import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import SelectList from './SelectList';

configure({ adapter: new Adapter() });

const items = [
  { value: 1, text: 'First Item' },
  { value: 2, text: 'Second Item' }
];

describe('Selectlist Component', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <SelectList items={items} placeholder="Select an item" />
    );
  });

  it('should render component succesfully', () => {
    expect(wrapper.exists()).toEqual(true);
    expect(wrapper.type()).toEqual('div');
  });

  it('should has default select class', () => {
    expect(wrapper.prop('className')).toEqual('tm-select');
  });

  it('should render placeholder if selected item is wrong or undefined', () => {
    const placeholder = wrapper.find('.placeholder');

    expect(placeholder.length).toEqual(1);
    expect(placeholder.text()).toEqual('Select an item');
  });

  it('should render selected item text if selected item is valid', () => {
    wrapper.setProps({ selectedValue: 2 });
    const selectedText = wrapper.find('.text');

    expect(selectedText.length).toEqual(1);
    expect(selectedText.text()).toEqual('Second Item');
  });

  it('should not render items dom if open state false', () => {
    const itemsDiv = wrapper.find('.list');
    expect(itemsDiv.exists()).toEqual(false);
  });

  it('should render items dom if open state true', () => {
    wrapper.setState({ isOpen: true });
    const itemsDiv = wrapper.find('.list');
    expect(itemsDiv.exists()).toEqual(true);
  });

  it('should change state on click', () => {
    const selectedWrapper = wrapper.find('.current');
    expect(wrapper.state('isOpen')).toEqual(false);
    selectedWrapper.simulate('click');
    expect(wrapper.state('isOpen')).toEqual(true);
  });

  it('should add active class to wrapper if is open', () => {
    const selectedWrapper = wrapper.find('.current');
    selectedWrapper.simulate('click');

    expect(wrapper.prop('className')).toEqual('open tm-select');
  });

  it('should render items in items wraper', () => {
    const selectedWrapper = wrapper.find('.current');
    selectedWrapper.simulate('click');

    const itemsDiv = wrapper.find('.list');
    expect(itemsDiv.find('.option').length).toEqual(2);
    expect(
      itemsDiv
        .find('.option')
        .first()
        .text()
    ).toEqual('First Item');
    expect(
      itemsDiv
        .find('.option')
        .last()
        .text()
    ).toEqual('Second Item');
  });

  it('should change selected item when item selected', () => {
    const onChangeMock = jest.fn();

    wrapper.setProps({ onChange: onChangeMock });
    expect(onChangeMock.mock.calls.length).toEqual(0);

    const selectedWrapper = wrapper.find('.current');
    selectedWrapper.simulate('click');
    expect(wrapper.state('isOpen')).toEqual(true);

    const itemsDiv = wrapper.find('.list');
    itemsDiv
      .find('.option')
      .first()
      .simulate('click');

    expect(wrapper.state('isOpen')).toEqual(false);
    expect(wrapper.state('selectedItem')).toEqual({
      value: 1,
      text: 'First Item'
    });
    expect(onChangeMock.mock.calls.length).toEqual(1);
    expect(onChangeMock.mock.calls[0][0]).toEqual({
      value: 1,
      text: 'First Item'
    });
  });

  it('should add overflow class if items more than 5', () => {
    const newItems = [];
    for (let i = 0; i < 6; i++) {
      newItems.push({ value: i, text: `Item ${i}` });
    }

    wrapper.setProps({ items: newItems });

    const selectedWrapper = wrapper.find('.current');
    selectedWrapper.simulate('click');

    expect(
      wrapper
        .find('.list')
        .first()
        .prop('className')
    ).toEqual('big-list list');
  });
});
