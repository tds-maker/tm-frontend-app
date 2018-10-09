import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import IPopover from '../Popover/Popover'
import BlankAlternatingTable from './BlankAlternatingTable'
configure({ adapter: new Adapter() })
let wrapper: any
const props = {
	onBlankTable: () => null,
	onAlternatingTable: () => null,
}
describe('Blank and Alternating Table Component', () => {
	beforeEach(() => {
		wrapper = shallow(<BlankAlternatingTable {...props} />)
	})
	it('should be render successfully', () => {
		expect(wrapper.exists()).toEqual(true)
		expect(wrapper.type()).toEqual(IPopover)
	})
	it('when click blank table', () => {
		const mockFn = jest.fn()
		wrapper.setProps({ onBlankTable: mockFn })
		expect(mockFn.mock.calls.length).toEqual(0)
		wrapper
			.find('.tablecol')
			.at(0)
			.simulate('click')
		expect(mockFn.mock.calls.length).toEqual(1)
	})
	it('when click alternating table', () => {
		const mockFn = jest.fn()
		wrapper.setProps({ onAlternatingTable: mockFn })
		expect(mockFn.mock.calls.length).toEqual(0)
		wrapper
			.find('.tablecol')
			.at(1)
			.simulate('click')
		expect(mockFn.mock.calls.length).toEqual(1)
	})
})
