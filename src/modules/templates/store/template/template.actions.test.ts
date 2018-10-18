import {
	changeName,
	initTemplate,
	loadTemplate,
	selectPrimaryLanguage,
	selectProductNumberOption,
	CHANGE_NAME,
	SET_LANGUAGES,
	SET_PRIMARY_LANGUAGE,
	SET_PRODUCT_NO_OPTION,
	INIT_TEMPLATE,
	LOAD_TEMPLATE,
	selectLanguage,
} from './template.actions'

describe('Template actions', () => {
	it('should return init template action', () => {
		const action = initTemplate()
		expect(action.type).toEqual(INIT_TEMPLATE)
		expect(action.payload).toBeUndefined()
	})

	it('should return load template action', () => {
		const action = loadTemplate('fake-id')
		expect(action.type).toEqual(LOAD_TEMPLATE)
		expect(action.payload).toEqual('fake-id')
	})

	it('should return CHANGE_NAME action', () => {
		const action = changeName('new-name')
		expect(action.type).toEqual(CHANGE_NAME)
		expect(action.payload).toEqual('new-name')
	})

	it('should return SET_LANGUAGES actions', () => {
		const action = selectLanguage(true, 'en')
		expect(action.type).toEqual(SET_LANGUAGES)
		expect(action.payload).toEqual({ isSelected: true, language: 'en' })
	})

	it('should return SET_PRIMARY_LANGUAGE action', () => {
		const action = selectPrimaryLanguage('tr')
		expect(action.type).toEqual(SET_PRIMARY_LANGUAGE)
		expect(action.payload).toEqual('tr')
	})

	it('should return SET_PRODUCT_NO_OPTION action', () => {
		const action = selectProductNumberOption('fake-source')
		expect(action.type).toEqual(SET_PRODUCT_NO_OPTION)
		expect(action.payload).toEqual('fake-source')
	})
})
