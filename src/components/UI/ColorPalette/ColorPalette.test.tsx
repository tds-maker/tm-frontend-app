import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import ColorPalette from './ColorPalette'

configure({ adapter: new Adapter() })
describe('ColorPalette Component', () => {
	let wrapper: any

	beforeEach(() => {
		wrapper = shallow(<ColorPalette colors={['#000']} />)
	})

	it('should render successfully', () => {
		expect(wrapper.exists()).toEqual(true)
		expect(wrapper.type()).toEqual('div')
	})

	it('when click color', () => {
		const mockFn = jest.fn()
		wrapper.setProps({ onColorSelect: mockFn })
		expect(mockFn.mock.calls.length).toEqual(0)
		wrapper.find('span').simulate('click')
		expect(mockFn.mock.calls.length).toEqual(1)
		expect(mockFn.mock.calls[0][0]).toEqual('#000')
	})
})
