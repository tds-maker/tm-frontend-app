import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'

import InputNumber from './InputNumber'

configure({ adapter: new Adapter() })

const mockFn = () => null
describe('Input number component', () => {
	let wrapper: any

	beforeEach(() => {
		wrapper = shallow(<InputNumber onValueChanged={mockFn} />)
	})

	it('should render successfully', () => {
		expect(wrapper.exists()).toEqual(true)
		expect(wrapper.type()).toEqual('div')
	})

	it('should input element', () => {
		expect(wrapper.find('input').exists()).toEqual(true)
		expect(wrapper.find('input').prop('type')).toEqual('text')
	})

	it('should render plus button', () => {
		expect(wrapper.find('button.qtyplus').exists()).toEqual(true)
		expect(wrapper.find('button.qtyplus').text()).toEqual('+')
	})

	it('should render minus button', () => {
		expect(wrapper.find('button.qtyminus').exists()).toEqual(true)
		expect(wrapper.find('button.qtyminus').text()).toEqual('-')
	})

	it('user can set default value', () => {
		wrapper.setProps({ value: 0 })
		expect(wrapper.find('input').prop('value')).toEqual(0)
	})

	it('should add 1 when clicked plus', () => {
		expect(wrapper.find('input').prop('value')).toEqual(0)
		wrapper.find('button.qtyplus').simulate('click', { target: { className: 'qtyplus' } })
		expect(wrapper.find('input').prop('value')).toEqual(1)
	})

	it('should minus 1 when clicked minus', () => {
		wrapper.setProps({ value: 5 })
		expect(wrapper.find('input').prop('value')).toEqual(5)
		wrapper.find('button.qtyminus').simulate('click', { target: { className: 'qtyminus' } })
		expect(wrapper.find('input').prop('value')).toEqual(4)
	})

	it('should change value if keypress is a number', () => {
		const preventMock = jest.fn()
		expect(preventMock.mock.calls.length).toEqual(0)
		wrapper.find('input').simulate('keyPress', { keyCode: 53, preventDefault: preventMock }) // key kode for '5'
		expect(preventMock.mock.calls.length).toEqual(0)
	})

	it('should not change value if keypress is not a number', () => {
		const preventMock = jest.fn()
		expect(preventMock.mock.calls.length).toEqual(0)
		wrapper.find('input').simulate('keyPress', { keyCode: 97, preventDefault: preventMock }) // key code for 'a'
		expect(preventMock.mock.calls.length).toEqual(1)
	})
})
