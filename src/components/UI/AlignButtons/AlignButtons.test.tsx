import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import { Popover } from '../../'
import AlignButtons from './AlignButtons'
configure({ adapter: new Adapter() })
let wrapper: any

describe('Align Buttons Component', () => {
	const props = {
		selectedAlign: null,
		onAlignChange: () => null,
	}
	beforeEach(() => {
		wrapper = shallow(<AlignButtons {...props} />)
	})
	it('should render successfully', () => {
		expect(wrapper.exists()).toEqual(true)
		expect(wrapper.type()).toEqual(Popover)
	})
	it('when selectedAlign is right should be bgColor fiiled', () => {
		wrapper.setProps({ selectedAlign: 'right' })
		expect(
			wrapper
				.find('span')
				.at(1)
				.prop('style')
		).toHaveProperty('backgroundColor', '#e8f5fe')
	})
	it('when click left button', () => {
		const mockFn = jest.fn()
		wrapper.setProps({ onAlignChange: mockFn })
		expect(mockFn.mock.calls.length).toEqual(0)
		wrapper
			.find('span')
			.at(0)
			.simulate('click')
		expect(mockFn.mock.calls.length).toEqual(1)
		expect(mockFn.mock.calls[0][0]).toEqual('left')
	})
	it('when click right button', () => {
		const mockFn = jest.fn()
		wrapper.setProps({ onAlignChange: mockFn })
		expect(mockFn.mock.calls.length).toEqual(0)
		wrapper
			.find('span')
			.at(1)
			.simulate('click')
		expect(mockFn.mock.calls.length).toEqual(1)
		expect(mockFn.mock.calls[0][0]).toEqual('right')
	})
	it('when click center button', () => {
		const mockFn = jest.fn()
		wrapper.setProps({ onAlignChange: mockFn })
		expect(mockFn.mock.calls.length).toEqual(0)
		wrapper
			.find('span')
			.at(2)
			.simulate('click')
		expect(mockFn.mock.calls.length).toEqual(1)
		expect(mockFn.mock.calls[0][0]).toEqual('center')
	})
	it('when click justify button', () => {
		const mockFn = jest.fn()
		wrapper.setProps({ onAlignChange: mockFn })
		expect(mockFn.mock.calls.length).toEqual(0)
		wrapper
			.find('span')
			.at(3)
			.simulate('click')
		expect(mockFn.mock.calls.length).toEqual(1)
		expect(mockFn.mock.calls[0][0]).toEqual('justify')
	})
})
