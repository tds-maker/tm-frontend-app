import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import Input from './Input';

configure({ adapter: new Adapter() });

describe('Input Component', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<Input />);
  });

  it('should render successfully', () => {
    expect(wrapper.exists()).toEqual(true);
    expect(wrapper.type()).toEqual('input');
  });

  it('should have default input class', () => {
    expect(wrapper.prop('className')).toEqual('tm-input tm-input-default');
  });

  it('should render type as text for default', () => {
    expect(wrapper.prop('type')).toEqual('text');
  });

  it('should render color if defined', () => {
    wrapper.setProps({ color: 'gray' });
    expect(wrapper.prop('className')).toEqual('tm-input tm-input-gray');
  });

  it('should set placeholder if defined', () => {
    wrapper.setProps({ placeholder: 'test-placeholder' });
    expect(wrapper.prop('placeholder')).toEqual('test-placeholder');
  });

  it('should set value if value setted', () => {
    wrapper.setProps({ value: 'Fake value' });
    expect(wrapper.prop('value')).toEqual('Fake value');
  });

  it('should run onChange function when changed', () => {
    const onChangeMock = jest.fn();
    wrapper.setProps({ onChange: onChangeMock });
    expect(onChangeMock.mock.calls.length).toEqual(0);

    wrapper.simulate('change', { target: { value: 'fake-value' } });

    expect(onChangeMock.mock.calls.length).toEqual(1);
    expect(onChangeMock.mock.calls[0][0]).toEqual({
      target: { value: 'fake-value' }
    });
  });
});
