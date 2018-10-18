import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'

import UndoRedoButton from './UndoRedoButton'

configure({ adapter: new Adapter() })

describe('UnduRedo Button Component', () => {
	const handleClickUndo = jest.fn()
	const handleClickRedo = jest.fn()
	let wrapper: any

	beforeEach(() => {
		wrapper = shallow(
			<UndoRedoButton
				handleClickUndo={handleClickUndo}
				handleClickRedo={handleClickRedo}
				undoEnabled={true}
				redoEnabled={false}
			/>
		)
	})

	it('should render successfully', () => {
		expect(wrapper.exists()).toEqual(true)
		expect(wrapper.type()).toEqual(React.Fragment)
		expect(wrapper.childAt(0).type()).toBe('a')
		expect(wrapper.childAt(1).type()).toBe('a')
	})

	it('When undoEnabled is true clicked:', () => {
		const clickMock = jest.fn()
		expect(clickMock.mock.calls.length).toEqual(0)
		wrapper.setProps({ handleClickUndo: clickMock })
		wrapper.childAt(0).simulate('click')
		expect(clickMock.mock.calls.length).toEqual(1)
	})

	it('When redoEnabled is false clicked:', () => {
		const clickMock = jest.fn()
		expect(clickMock.mock.calls.length).toEqual(0)
		wrapper.setProps({ handleClickRedo: clickMock })
		wrapper.childAt(1).simulate('click')
		expect(clickMock.mock.calls.length).toEqual(0)
	})
})
