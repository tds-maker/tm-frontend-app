import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import IPopover from '../Popover/Popover'
import ShapeButtons from './ShapeButtons'
configure({ adapter: new Adapter() })
let wrapper: any
const props = {
	onCircle: () => null,
	onSquare: () => null,
	onTriangle: () => null,
	onSquareRd: () => null,
}
describe('ShapeButtons Component', () => {
	beforeEach(() => {
		wrapper = shallow(<ShapeButtons {...props} />)
	})
	it('should be render successfully', () => {
		expect(wrapper.exists()).toEqual(true)
		expect(wrapper.type()).toEqual(IPopover)
	})
	it('when click circle button', () => {
		const mockFn = jest.fn()
		wrapper.setProps({ onCircle: mockFn })
		expect(mockFn.mock.calls.length).toEqual(0)
		wrapper
			.find('span')
			.at(1)
			.simulate('click')
		expect(mockFn.mock.calls.length).toEqual(1)
	})
	it('when click square button', () => {
		const mockFn = jest.fn()
		wrapper.setProps({ onSquare: mockFn })
		expect(mockFn.mock.calls.length).toEqual(0)
		wrapper
			.find('span')
			.at(0)
			.simulate('click')
		expect(mockFn.mock.calls.length).toEqual(1)
	})
	it('when click triangle button', () => {
		const mockFn = jest.fn()
		wrapper.setProps({ onTriangle: mockFn })
		expect(mockFn.mock.calls.length).toEqual(0)
		wrapper
			.find('span')
			.at(2)
			.simulate('click')
		expect(mockFn.mock.calls.length).toEqual(1)
	})
	it('when click squareRd button', () => {
		const mockFn = jest.fn()
		wrapper.setProps({ onSquareRd: mockFn })
		expect(mockFn.mock.calls.length).toEqual(0)
		wrapper
			.find('span')
			.at(3)
			.simulate('click')
		expect(mockFn.mock.calls.length).toEqual(1)
	})
})
