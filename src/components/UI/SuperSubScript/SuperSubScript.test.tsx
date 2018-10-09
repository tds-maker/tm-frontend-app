import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import SuperSubScript from './SuperSubScript'

configure({ adapter: new Adapter() })

describe('SuperSubScript Component', () => {
	const onDown = () => null
	const onUp = () => null
	let wrapper: any

	beforeEach(() => {
		wrapper = shallow(<SuperSubScript onSubScript={onUp} onSuperScript={onDown} />)
	})

	it('should render successfully', () => {
		expect(wrapper.exists()).toEqual(true)
		expect(wrapper.type()).toEqual('div')
	})
	it('when click subscript button', () => {
		const mockFn = jest.fn()
		wrapper.setProps({ onSubScript: mockFn })
		expect(mockFn.mock.calls.length).toEqual(0)
		wrapper
			.find('a')
			.at(1)
			.simulate('click')
		expect(mockFn.mock.calls.length).toEqual(1)
	})
	it('when click superscript button', () => {
		const mockFn = jest.fn()
		wrapper.setProps({ onSuperScript: mockFn })
		expect(mockFn.mock.calls.length).toEqual(0)
		wrapper
			.find('a')
			.at(0)
			.simulate('click')
		expect(mockFn.mock.calls.length).toEqual(1)
	})
})
