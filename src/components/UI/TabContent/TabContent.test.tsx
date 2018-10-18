import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import TabContent from './TabContent'

configure({ adapter: new Adapter() })

describe('TabContent Component', () => {
	let wrapper: any
	beforeEach(() => {
		wrapper = shallow(<TabContent />)
	})

	it('should render successfully', () => {
		expect(wrapper.exists()).toEqual(true)
		expect(wrapper.type()).toEqual('div')
	})
})
