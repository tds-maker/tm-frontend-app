import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import LayoutSelect from './LayoutSelect'

configure({ adapter: new Adapter() })
let wrapper: any
const columnId = 'column-1'
const mockFn = jest.fn()
describe('LayoutSelect Component', () => {
	beforeEach(() => {
		wrapper = shallow(<LayoutSelect onLayoutChange={mockFn} selectedLayout={columnId} />)
	})
	it('should render successfully', () => {
		expect(wrapper.exists()).toEqual(true)
		expect(wrapper.type()).toEqual('div')
	})
	it('should be six layout', () => {
		expect(wrapper.find('.layout-box').length).toEqual(6)
	})
	it('when clicked column-2 ids layout', () => {
		expect(
			wrapper
				.find('.layout-box')
				.at(0)
				.prop('className')
		).toEqual('layout-box active')
		expect(
			wrapper
				.find('.layout-box')
				.at(1)
				.prop('className')
		).toEqual('layout-box false')
		wrapper.setProps({ selectedLayout: 'column-2' })
		expect(
			wrapper
				.find('.layout-box')
				.at(1)
				.prop('className')
		).toEqual('layout-box active')
		expect(
			wrapper
				.find('.layout-box')
				.at(0)
				.prop('className')
		).toEqual('layout-box false')
	})
	it('should call onClick event when layout clicked', () => {
		wrapper.setProps({ onClick: mockFn })
		expect(mockFn.mock.calls.length).toEqual(0)
		wrapper
			.find('.layout-box')
			.at(0)
			.simulate('click')
		expect(mockFn.mock.calls.length).toEqual(1)
	})
})
