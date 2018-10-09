import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import CutCopyPaste from './CutCopyPaste'

configure({ adapter: new Adapter() })
const onCut = () => null
const onCopy = () => null
const onPaste = () => null
describe('Input Component', () => {
	let wrapper: any
	beforeEach(() => {
		wrapper = shallow(<CutCopyPaste onCut={onCut} onCopy={onCopy} onPaste={onPaste} />)
	})
	it('should render successfully', () => {
		expect(wrapper.exists()).toEqual(true)
		expect(wrapper.type()).toEqual('div')
	})
	it('when click cut button', () => {
		const mockFn = jest.fn()
		wrapper.setProps({ onCut: mockFn })
		expect(mockFn.mock.calls.length).toEqual(0)
		wrapper
			.find('a')
			.at(0)
			.simulate('click')
		expect(mockFn.mock.calls.length).toEqual(1)
	})
	it('when click copt button', () => {
		const mockFn = jest.fn()
		wrapper.setProps({ onCopy: mockFn })
		expect(mockFn.mock.calls.length).toEqual(0)
		wrapper
			.find('a')
			.at(1)
			.simulate('click')
		expect(mockFn.mock.calls.length).toEqual(1)
	})
	it('when click copt button', () => {
		const mockFn = jest.fn()
		wrapper.setProps({ onPaste: mockFn })
		expect(mockFn.mock.calls.length).toEqual(0)
		wrapper
			.find('a')
			.at(2)
			.simulate('click')
		expect(mockFn.mock.calls.length).toEqual(1)
	})
})
