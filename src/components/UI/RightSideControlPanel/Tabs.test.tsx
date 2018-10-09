import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import Tabs from './Tabs'
configure({ adapter: new Adapter() })
let wrapper: any
describe('Tabs Component', () => {
	beforeEach(() => {
		wrapper = shallow(<Tabs />)
	})
	it('should be render successfully', () => {
		expect(wrapper.exists()).toEqual(true)
		expect(wrapper.type()).toEqual(React.Fragment)
	})
	it('when click toggle panel', () => {
		wrapper.find('.side-panel-toggle').simulate('click')
		expect(wrapper.state().isPanelOpen).toEqual(true)
	})
})
