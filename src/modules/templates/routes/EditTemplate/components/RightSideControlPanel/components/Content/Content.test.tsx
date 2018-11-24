import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import Content from './Content'

configure({ adapter: new Adapter() })

describe('Content Component', () => {
	let wrapper: any
	beforeEach(() => {
		wrapper = shallow(<Content />)
	})

	it('should render successfully', () => {
		expect(wrapper.exists()).toEqual(true)
		expect(wrapper.type()).toEqual('div')
	})
})
