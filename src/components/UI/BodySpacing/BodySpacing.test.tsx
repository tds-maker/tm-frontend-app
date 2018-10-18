import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'

import BodySpacing from '../BodySpacing/BodySpacing'
import InputNumber from '../InputNumber/InputNumber'

configure({ adapter: new Adapter() })
let wrapper: any

const handleChange = () => {
	return { value: 0, position: 'left' }
}
const onValueChanged = (newValue: number) => null
describe('Body Spacing component', () => {
	const positions = {
		right: 0,
		left: 0,
		bottom: 0,
		top: 0,
	}
	beforeEach(() => {
		wrapper = shallow(
			<BodySpacing handleChange={handleChange} {...positions}>
				<InputNumber value={positions.left} onValueChanged={onValueChanged} />
			</BodySpacing>
		)
	})
	it('should render successfully', () => {
		expect(wrapper.exists()).toEqual(true)
		expect(wrapper.type()).toEqual('div')
	})
	it('should have a four child component', () => {
		const ChildComponent = wrapper.find(InputNumber)
		expect(ChildComponent.length).toEqual(4)
	})
	it('should have correct children', () => {
		const ChildComponent = wrapper.find(InputNumber)
		expect(ChildComponent.at(0).props().value).toEqual(0)
		expect(ChildComponent.at(1).props().value).toEqual(0)
		expect(ChildComponent.at(2).props().value).toEqual(0)
		expect(ChildComponent.at(3).props().value).toEqual(0)
	})
	it('should change value when set props', () => {
		wrapper.setProps({ left: 1, right: 1, bottom: 1, top: 1 })
		const ChildComponent = wrapper.find(InputNumber)
		expect(ChildComponent.at(0).props().value).toEqual(1)
		expect(ChildComponent.at(1).props().value).toEqual(1)
		expect(ChildComponent.at(2).props().value).toEqual(1)
		expect(ChildComponent.at(3).props().value).toEqual(1)
	})
	it('handleChange function when click minus', () => {
		const preventMock = jest.fn()
		const ChildComponent = wrapper
			.find(InputNumber)
			.at(0)
			.dive()
			.find('button.qtyminus')
		wrapper.setProps({ handleChange: preventMock })
		expect(preventMock.mock.calls.length).toEqual(0)
		ChildComponent.simulate('click', { target: { className: 'qtyminus' } })
		expect(preventMock.mock.calls.length).toEqual(1)
	})
	it('handleChange function when click plus', () => {
		const preventMock = jest.fn()
		const ChildComponent = wrapper
			.find(InputNumber)
			.at(1)
			.dive()
			.find('button.qtyplus')
		wrapper.setProps({ handleChange: preventMock })
		expect(preventMock.mock.calls.length).toEqual(0)
		ChildComponent.simulate('click', { target: { className: 'qtyplus' } })
		expect(preventMock.mock.calls.length).toEqual(1)
	})
})
