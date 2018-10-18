import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import HeadContainer from './HeadContainer'
configure({ adapter: new Adapter() })
describe('Head Container Component', () => {
	let wrapper: any
	const props = {
		onDesignButton: () => null,
		onCreateButton: () => null,
		onShareButton: () => null,
		onSaveButton: () => null,
		onPreviewButton: () => null,
		onPublishButton: () => null,
	}
	beforeEach(() => {
		wrapper = shallow(<HeadContainer {...props} />)
	})
	it('should render successfully', () => {
		expect(wrapper.exists()).toEqual(true)
		expect(wrapper.type()).toEqual('div')
	})
	it('when click onDesignButton', () => {
		const mockFn = jest.fn()
		wrapper.setProps({ onDesignButton: mockFn })
		expect(mockFn.mock.calls.length).toEqual(0)
		wrapper
			.find('.main__tabs ul li')
			.at(0)
			.simulate('click')
		expect(mockFn.mock.calls.length).toEqual(1)
	})
	it('when click onCreateButton', () => {
		const mockFn = jest.fn()
		wrapper.setProps({ onCreateButton: mockFn })
		expect(mockFn.mock.calls.length).toEqual(0)
		wrapper
			.find('.main__tabs ul li')
			.at(1)
			.simulate('click')
		expect(mockFn.mock.calls.length).toEqual(1)
	})
	it('when click onShareButton', () => {
		const mockFn = jest.fn()
		wrapper.setProps({ onShareButton: mockFn })
		expect(mockFn.mock.calls.length).toEqual(0)
		wrapper
			.find('.main__tabs ul li')
			.at(2)
			.simulate('click')
		expect(mockFn.mock.calls.length).toEqual(1)
	})
	it('when click onSaveButton', () => {
		const mockFn = jest.fn()
		wrapper.setProps({ onSaveButton: mockFn })
		expect(mockFn.mock.calls.length).toEqual(0)
		wrapper
			.find('.head-right-col a')
			.at(0)
			.simulate('click')
		expect(mockFn.mock.calls.length).toEqual(1)
	})
	it('when click onPreviewButton', () => {
		const mockFn = jest.fn()
		wrapper.setProps({ onPreviewButton: mockFn })
		expect(mockFn.mock.calls.length).toEqual(0)
		wrapper
			.find('.head-right-col a')
			.at(1)
			.simulate('click')
		expect(mockFn.mock.calls.length).toEqual(1)
	})
	it('when click onPublishButton', () => {
		const mockFn = jest.fn()
		wrapper.setProps({ onPublishButton: mockFn })
		expect(mockFn.mock.calls.length).toEqual(0)
		wrapper
			.find('.head-right-col a')
			.at(2)
			.simulate('click')
		expect(mockFn.mock.calls.length).toEqual(1)
	})
})
