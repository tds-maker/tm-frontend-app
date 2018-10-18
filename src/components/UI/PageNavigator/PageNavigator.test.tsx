import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import PageNavigator from './PageNavigator'

configure({ adapter: new Adapter() })

describe('Input number component', () => {
	const onDown = () => null
	const onUp = () => null
	let wrapper: any

	beforeEach(() => {
		wrapper = shallow(
			<PageNavigator onUp={onUp} onDown={onDown} totalPage={5} currentPage={3} />
		)
	})

	it('should render successfully', () => {
		expect(wrapper.exists()).toEqual(true)
		expect(wrapper.type()).toEqual('div')
	})
	it('Page Navigator Properly', () => {
		const navigatorValue = wrapper.find('.number').text()
		expect(navigatorValue).toEqual('3')
		expect(wrapper.exists('.minus')).toEqual(true)
		expect(wrapper.exists('.plus')).toEqual(true)
	})
	it('should call onClick event when onUp clicked', () => {
		const mockFn = jest.fn()
		wrapper.setProps({ onUp: mockFn })
		expect(mockFn.mock.calls.length).toEqual(0)
		wrapper.find('.plus').simulate('click')
		expect(mockFn.mock.calls.length).toEqual(1)
	})
	it('should call onClick event when onDown clicked', () => {
		const mockFn = jest.fn()
		wrapper.setProps({ onDown: mockFn })
		expect(mockFn.mock.calls.length).toEqual(0)
		wrapper.find('.minus').simulate('click')
		expect(mockFn.mock.calls.length).toEqual(1)
	})
})
