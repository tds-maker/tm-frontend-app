import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import Popover from '../Popover/Popover'
import FontFamily from './FontFamily'
configure({ adapter: new Adapter() })
let wrapper: any

describe('Font Family component', () => {
	beforeEach(() => {
		wrapper = shallow(<FontFamily />)
	})
	it('should render successfully', () => {
		expect(wrapper.exists()).toEqual(true)
		expect(wrapper.type()).toEqual(Popover)
	})
	it('should have a default state', () => {
		expect(wrapper.state().selectedFont).toEqual('Arial')
		expect(wrapper.state().isChangeAllTexts).toEqual(false)
	})
	it('should change selected font when font selected', () => {
		wrapper
			.find('.custom-scrollbar ul li')
			.at(1)
			.simulate('click')
		expect(wrapper.state().selectedFont).toEqual('Arial Black')
	})
})
