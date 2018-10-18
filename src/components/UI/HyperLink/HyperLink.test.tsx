import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import Popover from '../Popover/Popover'
import HyperLink from './HyperLink'

configure({ adapter: new Adapter() })
const handleClick = (e: any) => null
describe('HyperLink Component', () => {
	let wrapper: any
	wrapper = shallow(<HyperLink onApplyClick={handleClick} />)
	it('should render successfully', () => {
		expect(wrapper.exists()).toEqual(true)
		expect(wrapper.type()).toEqual(Popover)
	})
	it('submit form', () => {
		const mockFn = jest.fn()
		wrapper.setProps({ onApplyClick: mockFn })
		wrapper.setState({ value: 'https://www.tdsmaker.com' })
		const fakeEvent = { preventDefault: () => null }
		wrapper.find('form').simulate('submit', fakeEvent)
		expect(mockFn.mock.calls[0][0]).toEqual('https://www.tdsmaker.com')
	})
})
