import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'

import Button from './Button'

configure({ adapter: new Adapter() })

describe('Button Component', () => {
	let wrapper: any

	beforeEach(() => {
		wrapper = shallow(<Button>Fake Button</Button>)
	})

	it('should render component succesfully', () => {
		expect(wrapper.exists()).toEqual(true)
		expect(wrapper.type()).toEqual('button')
		expect(wrapper.text()).toEqual('Fake Button')
	})

	it('should has default button class', () => {
		expect(wrapper.prop('className')).toEqual('tm-btn ')
	})

	it('should set button class by color', () => {
		wrapper.setProps({ color: 'blue' })
		expect(wrapper.prop('className')).toEqual('tm-btn tm-btn-blue ')
	})

	it('should call onClick function when clicked', () => {
		const onClickMock = jest.fn()

		wrapper.setProps({ onClick: onClickMock })
		expect(onClickMock.mock.calls.length).toEqual(0)
		wrapper.simulate('click')
		expect(onClickMock.mock.calls.length).toEqual(1)
	})
})
