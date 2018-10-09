import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import { FontSize, Popover } from '../../'

configure({ adapter: new Adapter() })
let wrapper: any

describe('Font Size component', () => {
	beforeEach(() => {
		wrapper = shallow(<FontSize />)
	})
	it('should render successfully', () => {
		expect(wrapper.exists()).toEqual(true)
		expect(wrapper.type()).toEqual(Popover)
	})
	it('when click font size selected', () => {
		wrapper
			.find('ul li')
			.at(2)
			.simulate('click')
		expect(wrapper.state().fontsize).toEqual(8)
		expect(wrapper.props().dropdownText.props.value).toEqual(8)
	})
})
