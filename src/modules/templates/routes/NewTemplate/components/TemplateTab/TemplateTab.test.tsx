import { configure, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import { Input, SelectList } from '../../../../../../components'

import TemplateTab from './TemplateTab'

configure({ adapter: new Adapter() })

describe('NewTemplate First Tab Component', () => {
	let wrapper: any
	let template: any

	beforeEach(() => {
		template = {
			name: 'test-template',
			productNumberOption: 'optional',
			languages: ['en', 'tr'],
			primaryLanguage: 'en',
		}
		wrapper = shallow(<TemplateTab template={template} />)
	})

	it('should render second tab component successfully', () => {
		expect(wrapper.exists()).toEqual(true)
		expect(wrapper.children().length).toEqual(2)
	})

	it('each children must have "tab-col" classname', () => {
		wrapper.children().forEach((child: any) => {
			expect(child.prop('className')).toEqual('tab-col')
		})
	})

	describe('First column', () => {
		let firstColumn: any

		beforeAll(() => {
			firstColumn = wrapper.childAt(0)
		})

		it('should have 3 children', () => {
			expect(firstColumn.children().length).toEqual(4)
		})

		it('should have correct children', () => {
			expect(firstColumn.childAt(0).type()).toEqual('label')
			expect(firstColumn.childAt(0).text()).toEqual('TEMPLATE NAME')
			expect(firstColumn.childAt(1).type()).toEqual(Input)
			expect(firstColumn.childAt(1).props().placeholder).toEqual('Please write template name')
			expect(firstColumn.childAt(1).props().type).toEqual('text')
			expect(firstColumn.childAt(1).props().color).toEqual('default')

			expect(firstColumn.childAt(2).type()).toEqual('label')
			expect(firstColumn.childAt(2).text()).toEqual('PRODUCT NUMBER')
			expect(firstColumn.childAt(3).type()).toEqual(SelectList)
			expect(firstColumn.childAt(3).props().placeholder).toEqual('Select an item')
			expect(firstColumn.childAt(3).props().items.length).toEqual(4)
			expect(firstColumn.childAt(3).props().items).toEqual([
				{ value: 'optional', text: 'Optional' },
				{ value: 'must', text: 'Must' },
				{ value: 'unique', text: 'Unique' },
				{ value: 'None', text: 'None' },
			])
			expect(firstColumn.childAt(3).props().selectedValue).toEqual('optional')
		})
	})

	describe('Second column', () => {
		let secondColumn: any

		beforeAll(() => {
			secondColumn = wrapper.childAt(1)
		})

		it('should have 3 children', () => {
			expect(secondColumn.children().length).toEqual(9)
		})

		it('should have correct children', () => {
			expect(secondColumn.childAt(0).type()).toEqual('label')
			expect(secondColumn.childAt(0).text()).toEqual('TEMPLATE LANGUAGES')

			expect(secondColumn.childAt(6).type()).toEqual('label')
			expect(secondColumn.childAt(6).text()).toEqual('PRIMARY LANGUAGE')
			expect(secondColumn.childAt(7).type()).toEqual(SelectList)
			expect(secondColumn.childAt(7).props().placeholder).toEqual('Select an item')
		})
	})

	it('next button should be disabled if name or primary language empty', () => {
		expect(wrapper.instance().isNextDisabled()).toBeFalsy()
		template.name = ''
		template.primaryLanguage = ''
		wrapper.setProps({ template })
		expect(wrapper.instance().isNextDisabled()).toBeTruthy()

		template.name = 'test-template'
		wrapper.setProps({ template })
		expect(wrapper.instance().isNextDisabled()).toBeTruthy()

		template.primaryLanguage = 'en'
		wrapper.setProps({ template })
		expect(wrapper.instance().isNextDisabled()).toBeFalsy()
	})
})
