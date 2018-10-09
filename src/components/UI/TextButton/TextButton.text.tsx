import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import TextButton from './TextButton'

configure({ adapter: new Adapter() })

describe('UnduRedo Button Component', () => {
	let wrapper: any

	beforeEach(() => {
		wrapper = shallow(<TextButton onTextButton={() => null} />)
	})

	it('should render successfully', () => {
		expect(wrapper.exists()).toEqual(true)
		expect(wrapper.type()).toEqual('div')
	})

	it('When click text button:', () => {
		const clickMock = jest.fn()
		expect(clickMock.mock.calls.length).toEqual(0)
		wrapper.setProps({ onTextButton: clickMock })
		wrapper.find('a').simulate('click')
		expect(clickMock.mock.calls.length).toEqual(1)
	})
})
