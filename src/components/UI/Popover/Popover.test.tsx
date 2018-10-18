import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import Popover from './Popover'
configure({ adapter: new Adapter() })
let wrapper: any
const props = {
	popoverTypeClass: 'shape-popover',
	popoverTypeId: 'shape_popover',
	dropdownIcon: 'icon-shape',
}
describe('Popover Component', () => {
	beforeEach(() => {
		wrapper = shallow(<Popover {...props} />)
	})
	it('should be render successfully', () => {
		expect(wrapper.exists()).toEqual(true)
		expect(wrapper.type()).toEqual('div')
	})
	it('when clicked popover the isPopoverActive state should be true', () => {
		wrapper.find('.dropdown-icon').simulate('click')
		expect(wrapper.state().isPopoverActive).toEqual(true)
		wrapper.find('.dropdown-icon').simulate('click')
		expect(wrapper.state().isPopoverActive).toEqual(false)
	})
})
