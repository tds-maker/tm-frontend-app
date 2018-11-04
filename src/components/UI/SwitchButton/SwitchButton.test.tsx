import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import SwitchButton from './SwitchButton'

configure({ adapter: new Adapter() })

describe('SwitchButton Component', () => {
	let wrapper: any

	beforeEach(() => {
		wrapper = shallow(<SwitchButton checked={false} />)
	})

	it('should render successfully', () => {
		expect(wrapper.exists()).toEqual(true)
		expect(wrapper.type()).toEqual('div')
	})

	it('should have default class', () => {
		expect(wrapper.prop('className')).toEqual('onoffswitch')
	})

	it('should have child components', () => {
		expect(wrapper.find('input').exists()).toEqual(true)
		expect(wrapper.find('input').length).toEqual(1)
		expect(wrapper.find('input').type()).toEqual('input')
		expect(wrapper.find('input').prop('type')).toEqual('checkbox')
	})

	it('should set checked if setted', () => {
		wrapper.setProps({ checked: true })
		expect(wrapper.find('input').prop('checked')).toEqual(true)
	})

	it('should call onChange event when clicked', () => {
		const onChangeMock = jest.fn()
		wrapper.setProps({ onChange: onChangeMock })
		expect(onChangeMock.mock.calls.length).toEqual(0)
		wrapper.find('input').simulate('change')
		expect(onChangeMock.mock.calls.length).toEqual(1)
	})
})
