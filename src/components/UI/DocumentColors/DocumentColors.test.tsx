import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import DocumentColors from './DocumentColors'

configure({ adapter: new Adapter() })

describe('DocumentColors Component', () => {
	let wrapper: any
	beforeEach(() => {
		wrapper = shallow(<DocumentColors />)
	})

	it('should render successfully', () => {
		expect(wrapper.exists()).toEqual(true)
		expect(wrapper.type()).toEqual('div')
	})
})
