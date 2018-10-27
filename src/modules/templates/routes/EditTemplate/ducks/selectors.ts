import config from '../../../../../config'
import IStore from '../../../../../store/IStore'

const info = (state: IStore) => state.template.editTemplate.info
const infoLanguagesAsText = (state: IStore) => {
	return state.template.editTemplate.info.languages ? state.template.editTemplate.info.languages.map(language => config.languages[language]).join(', ')
	: "";
}
const options = (state: IStore) => state.template.editTemplate.options
const activeHeader = (state: IStore) => {
	const currentPage = activePage(state)
	const { headers } = state.template.editTemplate.design

	if (currentPage!._meta.hasHeader) {
		return headers[currentPage._meta.pageNo] || headers[0]
	} else {
		return
	}
}
const activeFooter = (state: IStore) => {
	const currentPage = activePage(state)
	const { footers } = state.template.editTemplate.design

	if (currentPage!._meta.hasFooter) {
		return footers[currentPage._meta.pageNo] || footers[0]
	} else {
		return
	}
}
const activePage = (state: IStore) =>
	state.template.editTemplate.design.pages[state.template.editTemplate.options.activePage]
const activePageMargin = (state: IStore) => activePage(state)._meta.margin
const activePageBody = (state: IStore) =>
	state.template.editTemplate.design.bodies[state.template.editTemplate.options.activePage]
const hasUndoEnabled = (state: IStore) => state.template.editTemplate.history.prevStates.length > 0
const hasRedoEnabled = (state: IStore) => state.template.editTemplate.history.nextStates.length > 0
const selectedElement = (state: IStore) =>
	state.template.editTemplate.design.elements.selectedElement

export default {
	info,
	infoLanguagesAsText,
	options,
	activePage,
	activePageBody,
	activeHeader,
	activeFooter,
	hasUndoEnabled,
	hasRedoEnabled,
	activePageMargin,
	selectedElement,
}
