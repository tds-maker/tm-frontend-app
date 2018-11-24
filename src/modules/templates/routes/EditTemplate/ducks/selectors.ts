import IStore from '../../../../../store/IStore'
import {
	IEditTemplateCommonReducer,
	IEditTemplateStateReducer,
	IElement,
	IPage,
} from './interfaces'
import config from '../../../../../config'

const common = (state: IStore): IEditTemplateCommonReducer | undefined =>
	state.template.editTemplate.common
const languagesAsText = (state: IStore) => {
	const _common = common(state)
	if (_common && _common.languages) {
		return _common.languages.map(language => config.languages[language]).join(', ')
	} else {
		return ''
	}
}

const activePageNumber = (state: IStore) => templateState(state).activePage

const hasUndoEnabled = (state: IStore) => {
	if (state.template.editTemplate.design) {
		return state.template.editTemplate.design.index > 1
	}
	return false
}
const hasRedoEnabled = (state: IStore) => {
	if (state.template.editTemplate.design) {
		return state.template.editTemplate.design.future.length > 0
	}
	return false
}

const templateState = (state: IStore): IEditTemplateStateReducer =>
	state.template.editTemplate.state!

const currentPage = (state: IStore): IPage | undefined => {
	const activePage = templateState(state).activePage
	if (state.template.editTemplate.design) {
		return state.template.editTemplate.design.present.pages[activePage]
	}
	return
}

const currentHeader = (state: IStore): IElement | undefined => {
	const activePage = templateState(state).activePage
	const page = currentPage(state)!
	const design = state.template.editTemplate.design!

	if (page._meta.hasHeader) {
		return (
			design.present.elements.byId[`header-${activePage}`] ||
			design.present.elements.byId['header-0']
		)
	} else {
		return undefined
	}
}
const currentFooter = (state: IStore): IElement | undefined => {
	const activePage = templateState(state).activePage
	const page = currentPage(state)!
	const design = state.template.editTemplate.design!

	if (page._meta.hasFooter) {
		return (
			design.present.elements.byId[`footer-${activePage}`] ||
			design.present.elements.byId['footer-0']
		)
	} else {
		return undefined
	}
}

const currentPageBody = (state: IStore) => {
	const page = currentPage(state)!
	return state.template.editTemplate.design!.present.elements.byId[page.elements[0]]
}
const currentPageMargin = (state: IStore) => {
	const page = currentPage(state)!
	return page._meta.margin
}
const hasHeader = (state: IStore): boolean => {
	const page = currentPage(state)!
	return page._meta.hasHeader
}
const hasFooter = (state: IStore): boolean => {
	const page = currentPage(state)!
	return page._meta.hasFooter
}

const elementsById = (state: IStore) => state.template.editTemplate.design!.present.elements.byId
const getLayout = (state: IStore) => currentPage(state)!._meta.layout
const headerElements = (state: IStore) => {
	const header = currentHeader(state)
	if (header) {
		return header.elements.map(
			(elementId: string) =>
				state.template.editTemplate.design!.present.elements.byId[elementId]
		)
	} else {
		return []
	}
}

const selectedElement = (state: IStore) => {
	const id = state.template.editTemplate.state!.selectedElement || ''
	return state.template.editTemplate.design!.present.elements.byId[id]
}

const selectedElementId = (state: IStore) => {
	return state.template.editTemplate.state!.selectedElement
}

export default {
	getLayout,
	common,
	languagesAsText,
	templateState,
	currentPage,
	currentHeader,
	currentFooter,
	hasUndoEnabled,
	hasRedoEnabled,
	currentPageBody,
	hasHeader,
	hasFooter,
	activePageNumber,
	currentPageMargin,
	elementsById,
	headerElements,
	selectedElement,
	selectedElementId,
}
