import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import hi from '../../../../../../assets/images/hi.png'
import marioNvF3D from '../../../../../../assets/images/MarioNvF3D.svg'
import { Button } from '../../../../../../components'
import Welcome from './Welcome'

configure({ adapter: new Adapter() })

describe('NewTemplate Welcome Component', () => {
	let wrapper: any
	beforeEach(() => {
		wrapper = shallow(<Welcome firstName="FakeName" />)
	})

	it('should render Welcome component successfully', () => {
		expect(wrapper.exists()).toEqual(true)
		expect(wrapper.type()).toEqual('div')
		expect(wrapper.children().length).toEqual(4)
	})

	it('should have correct classname', () => {
		expect(wrapper.prop('className')).toEqual('welcome-box')
	})

	it('should render header h1', () => {
		expect(wrapper.childAt(0).type()).toBe('h1')
		expect(
			wrapper
				.childAt(0)
				.find('span')
				.first()
				.text()
		).toEqual('Hello again, FakeName')
		expect(
			wrapper
				.childAt(0)
				.find('img')
				.prop('src')
		).toEqual(hi)
	})

	it('should render description', () => {
		expect(wrapper.childAt(1).type()).toBe('p')
		expect(wrapper.childAt(1).text()).toBe(
			'You are few steps away to create professional datasheets. Just follow Super Mario !'
		)
	})

	it('should render start button', () => {
		expect(wrapper.childAt(2).type()).toBe(Button)
		expect(wrapper.childAt(2).props().color).toBe('blue')
		expect(wrapper.childAt(2).props().children).toBe("Let's start")
	})

	it('should render mario image', () => {
		expect(wrapper.childAt(3).type()).toBe('img')
		expect(wrapper.childAt(3).prop('src')).toBe(marioNvF3D)
	})

	it('should call onclick event when button clicked', () => {
		const clickMock = jest.fn()
		expect(clickMock.mock.calls.length).toEqual(0)
		wrapper.setProps({ onButtonClick: clickMock })
		wrapper.find('#welcome-button').simulate('click')
		expect(clickMock.mock.calls[0][0]).toEqual(0)
		expect(clickMock.mock.calls.length).toEqual(1)
	})
})
