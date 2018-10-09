import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'

import RadioButton from './RadioButton'

configure({ adapter: new Adapter() })

describe('Radio Button Component', () => {
	let wrapper: any
	beforeEach(() => {
		wrapper = shallow(<RadioButton value="fake-item" name="g1" />)
	})

	it('should render successfully', () => {
		expect(wrapper.exists()).toEqual(true)
		expect(wrapper.type()).toEqual('label')
		expect(wrapper.find('input').prop('value')).toEqual('fake-item')
		expect(wrapper.find('input.radio').prop('name')).toEqual('g1')
	})

	it('should have default class', () => {
		expect(wrapper.prop('className')).toEqual('tm-radio')
	})

	it('should have child components', () => {
		expect(wrapper.find('span.text').exists()).toEqual(true)
		expect(wrapper.find('span.text').length).toEqual(1)

		expect(wrapper.find('input.radio').exists()).toEqual(true)
		expect(wrapper.find('input.radio').length).toEqual(1)
		expect(wrapper.find('input.radio').type()).toEqual('input')
		expect(wrapper.find('input.radio').prop('type')).toEqual('radio')
	})

	it('should set label text', () => {
		wrapper.setProps({ label: 'Fake-text' })
		expect(
			wrapper
				.find('span')
				.first()
				.text()
		).toEqual('Fake-text')
	})

	it('should set checked if setted', () => {
		wrapper.setProps({ selectedValue: 'fake-item' })
		expect(wrapper.find('input.radio').prop('checked')).toEqual(true)
	})

	it('should call onChange event when clicked', () => {
		const onChangeMock = jest.fn()
		wrapper.setProps({ onChange: onChangeMock })
		expect(onChangeMock.mock.calls.length).toEqual(0)
		wrapper.find('input').simulate('change')
		expect(onChangeMock.mock.calls.length).toEqual(1)
	})
})
