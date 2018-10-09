import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import INotify from './INotify'
import Notify from './Notify'

configure({ adapter: new Adapter() })

describe('Notify Component', () => {
	let wrapper: any
	beforeEach(() => {
		wrapper = shallow(<Notify />)
	})

	it('should render successfully', () => {
		expect(wrapper.exists()).toEqual(true)
		expect(wrapper.prop('className')).toEqual('tm-notify-container')
		expect(wrapper.children().length).toEqual(0)
	})

	it('should render notify message', () => {
		let notifications: INotify[] = [
			{ color: 'error', id: 0, message: 'fake-message', title: 'fake-title' },
		]
		wrapper.setProps({ notifications: notifications })
		expect(wrapper.children().length).toEqual(1)
		expect(wrapper.childAt(0).prop('className')).toEqual('tm-notify error')
	})

	it('can render more than one notification', () => {
		let notifications: INotify[] = [
			{ color: 'error', id: 0, message: 'fake-message', title: 'fake-title' },
			{ color: 'error', id: 1, message: 'fake-message', title: 'fake-title' },
		]
		wrapper.setProps({ notifications: notifications })
		expect(wrapper.children().length).toEqual(2)
	})
})
