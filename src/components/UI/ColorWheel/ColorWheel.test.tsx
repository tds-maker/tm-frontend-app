import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import ColorWheel from './ColorWheel'

configure({ adapter: new Adapter() })
const onColors = (e: any) => null
describe('ColorWheel Component', () => {
	let wrapper: any
	wrapper = shallow(<ColorWheel visible={false} onColors={onColors} />)
	it('should render successfully', () => {
		expect(wrapper.exists()).toEqual(true)
		expect(wrapper.type()).toEqual(null)
	})
	it('should isColorPicker initially false', () => {
		expect(wrapper.state().isColorPickerShow).toEqual(false)
	})
	describe('when customize prop is true', () => {
		beforeEach(() => wrapper.setProps({ visible: true }))
		it('should isColorPickerShow true', () => {
			const mockFn = jest.fn()
			wrapper.setProps({ onClick: mockFn })
			wrapper.find('.add-color').simulate('click')
			expect(wrapper.state().isColorPickerShow).toEqual(true)
		})
		it('when click apply button', () => {
			const mockFn = jest.fn()
			wrapper.setProps({ onColors: mockFn })
			wrapper.setState({ currentColor: '#000' })
			expect(mockFn.mock.calls.length).toEqual(2)
			wrapper.find('input').simulate('click', { target: { value: 'Apply' } })
			expect(mockFn.mock.calls.length).toEqual(3)
			expect(mockFn.mock.calls[2][0][0]).toEqual('#000')
			expect(wrapper.state().isColorPickerShow).toEqual(false)
			expect(wrapper.state().colors).toEqual(['#000'])
		})
	})
})
