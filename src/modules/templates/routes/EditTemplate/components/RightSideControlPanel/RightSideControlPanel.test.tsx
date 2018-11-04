import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import RightSideControlPanel from './RightSideControlPanel'
import Tabs from './Tabs'
configure({ adapter: new Adapter() })
let wrapper: any
describe('RightSideControlPanel Component', () => {
	beforeEach(() => {
		wrapper = shallow(<RightSideControlPanel />)
	})
	it('should be render successfully', () => {
		expect(wrapper.exists()).toEqual(true)
		expect(wrapper.type()).toEqual(Tabs)
	})
	it('Check tabs names', () => {
		expect(
			wrapper
				.find('div')
				.at(2)
				.text()
		).toEqual('CONTENT')
	})
})
