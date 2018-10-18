import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import FontStylesButtons from './FontStylesButtons'
configure({ adapter: new Adapter() })
let wrapper: any
const props = {
	onBold: () => null,
	onItalic: () => null,
	onUnderline: () => null,
	selectedBold: false,
}
describe('FontStylesButtons Component', () => {
	beforeEach(() => {
		wrapper = shallow(<FontStylesButtons {...props} />)
	})
	it('should be render successfully', () => {
		expect(wrapper.exists()).toEqual(true)
		expect(wrapper.type()).toEqual(React.Fragment)
	})
	it('when click bold button', () => {
		const mockFn = jest.fn()
		wrapper.setProps({ onBold: mockFn })
		expect(mockFn.mock.calls.length).toEqual(0)
		wrapper
			.find('a')
			.at(0)
			.simulate('click')
		expect(mockFn.mock.calls.length).toEqual(1)
	})
	it('when click italic button', () => {
		const mockFn = jest.fn()
		wrapper.setProps({ onItalic: mockFn })
		expect(mockFn.mock.calls.length).toEqual(0)
		wrapper
			.find('a')
			.at(1)
			.simulate('click')
		expect(mockFn.mock.calls.length).toEqual(1)
	})
	it('when click underline button', () => {
		const mockFn = jest.fn()
		wrapper.setProps({ onUnderline: mockFn })
		expect(mockFn.mock.calls.length).toEqual(0)
		wrapper
			.find('a')
			.at(2)
			.simulate('click')
		expect(mockFn.mock.calls.length).toEqual(1)
	})
	it('when selectedBold is true then should be bgColor fiiled', () => {
		wrapper.setProps({ selectedBold: true })
		expect(
			wrapper
				.find('a')
				.at(0)
				.prop('className')
		).toEqual('toolbar-item active')
	})
})
