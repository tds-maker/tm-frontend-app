import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import BackFrontButtons from './BackFrontButtons'
configure({ adapter: new Adapter() })
let wrapper: any

describe('Flip to back and front component', () => {
	const props = {
		onBackButton: () => null,
		onFrontButton: () => null,
	}
	beforeEach(() => {
		wrapper = shallow(<BackFrontButtons {...props} />)
	})
	it('should render successfully', () => {
		expect(wrapper.exists()).toEqual(true)
		expect(wrapper.type()).toEqual(React.Fragment)
	})
	it('when click back button', () => {
		const mockFn = jest.fn()
		wrapper.setProps({ onBackButton: mockFn })
		expect(mockFn.mock.calls.length).toEqual(0)
		wrapper
			.find('a')
			.at(0)
			.simulate('click')
		expect(mockFn.mock.calls.length).toEqual(1)
	})
	it('when click front button', () => {
		const mockFn = jest.fn()
		wrapper.setProps({ onFrontButton: mockFn })
		expect(mockFn.mock.calls.length).toEqual(0)
		wrapper
			.find('a')
			.at(1)
			.simulate('click')
		expect(mockFn.mock.calls.length).toEqual(1)
	})
})
