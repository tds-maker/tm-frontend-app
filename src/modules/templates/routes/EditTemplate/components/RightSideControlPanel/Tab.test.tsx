import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import Tab from './Tab'
configure({ adapter: new Adapter() })
let wrapper: any
const props = {
	tabIndex: 0,
	activeTab: 0,
	onTabClick: () => null,
	title: 'TEMPLATE',
	tabIcon: 'icon-folder',
}
describe('Tab Component', () => {
	beforeEach(() => {
		wrapper = shallow(<Tab {...props} />)
	})
	it('should be render successfully', () => {
		expect(wrapper.exists()).toEqual(true)
		expect(wrapper.type()).toEqual('li')
	})
	it('when click tab item', () => {
		const mockFn = jest.fn()
		wrapper.setProps({ onTabClick: mockFn, tabIndex: 2 })
		wrapper.find('li').simulate('click')
		expect(mockFn.mock.calls[0][0]).toEqual(2)
	})
	it('should set only selected tab', () => {
		wrapper.setProps({ tabIndex: 1, activeTab: 1 })
		expect(wrapper.find('li').prop('className')).toEqual('active')
	})
})
