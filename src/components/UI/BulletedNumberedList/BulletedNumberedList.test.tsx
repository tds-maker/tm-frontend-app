import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import BulletedNumberedList from './BulletedNumberedList'

configure({ adapter: new Adapter() })

describe('Button Component', () => {
	let wrapper: any
	const props = {
		onBulletedList: () => null,
		onNumberedList: () => null,
	}
	beforeEach(() => {
		wrapper = shallow(<BulletedNumberedList {...props} />)
	})

	it('should render component succesfully', () => {
		expect(wrapper.exists()).toEqual(true)
		expect(wrapper.type()).toEqual(React.Fragment)
	})
	it('when click Bulleted List', () => {
		const mockFn = jest.fn()
		wrapper.setProps({ onBulletedList: mockFn })
		expect(mockFn.mock.calls.length).toEqual(0)
		wrapper
			.find('a')
			.at(0)
			.simulate('click')
		expect(mockFn.mock.calls.length).toEqual(1)
	})
	it('when click Numbered List', () => {
		const mockFn = jest.fn()
		wrapper.setProps({ onNumberedList: mockFn })
		expect(mockFn.mock.calls.length).toEqual(0)
		wrapper
			.find('a')
			.at(1)
			.simulate('click')
		expect(mockFn.mock.calls.length).toEqual(1)
	})
})
