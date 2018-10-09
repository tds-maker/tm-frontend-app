import { configure, mount, shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as React from 'react'
import Input from '../Input/Input'
import SelectList from '../SelectList/SelectList'
import TemplateSelect from './TemplateSelect'

configure({ adapter: new Adapter() })
describe('TemplateSelect Component', () => {
	let wrapperShallow: any
	let wrapperMount: any
	const templates = [{ imageURL: 'image', templateId: 1 }]
	const items = [{ value: 'test', text: 'Test' }]
	const onSearch = () => null
	const onTemplateSelect = () => null
	const onSelectCategory = () => null

	beforeEach(() => {
		wrapperShallow = shallow(
			<TemplateSelect
				onTemplateSelect={onTemplateSelect}
				templates={templates}
				items={items}
				onSearch={onSearch}
				onSelectCategory={onSelectCategory}
			/>
		)
		wrapperMount = mount(
			<TemplateSelect
				onTemplateSelect={onTemplateSelect}
				templates={templates}
				items={items}
				onSearch={onSearch}
				onSelectCategory={onSelectCategory}
			/>
		)
	})

	it('should render successfully', () => {
		expect(wrapperShallow.exists()).toEqual(true)
		expect(wrapperShallow.type()).toEqual('div')
	})
	it('should change onSelectCategory function', () => {
		const onChangeMock = jest.fn()
		wrapperShallow.setProps({ onSelectCategory: onChangeMock })
		expect(onChangeMock.mock.calls.length).toEqual(0)
		wrapperShallow.find(SelectList).simulate('change')
		expect(onChangeMock.mock.calls.length).toEqual(1)
	})
	it('should click onTemplateSelect function', () => {
		const onClickMock = jest.fn()
		wrapperShallow.setProps({ onTemplateSelect: onClickMock })
		expect(onClickMock.mock.calls.length).toEqual(0)
		wrapperShallow.find('.template-box').simulate('click')
		expect(onClickMock.mock.calls.length).toEqual(1)
	})
	it('should change onSearch function', () => {
		const onChangeMock = jest.fn()
		wrapperShallow.setProps({ onSearch: onChangeMock })
		expect(onChangeMock.mock.calls.length).toEqual(0)
		wrapperShallow.find(Input).simulate('change')
		expect(onChangeMock.mock.calls.length).toEqual(1)
	})
	it('should render and change items prop', () => {
		expect(wrapperMount.prop('items')).toEqual(items)
		const newItems = [{ value: 'test2', text: 'Test2' }]
		wrapperMount.setProps({ items: newItems })
		expect(wrapperMount.prop('items')).toEqual(newItems)
	})
	it('should render and change templates prop', () => {
		expect(wrapperMount.prop('templates')).toEqual(templates)
		const newTemplates = [{ imageURL: 'imageTest', templateId: 2 }]
		wrapperMount.setProps({ templates: newTemplates })
		expect(wrapperMount.prop('templates')).toEqual(newTemplates)
	})
})
