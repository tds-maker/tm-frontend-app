import actions from './actions'
import selectors from './selectors'
import IEditTemplateReducer, { IElement } from './interfaces'
import { CSSProperties } from 'react'
import defaultReducerObjects from './defaults'
import { pageLayout } from './enums'
import IStore from '../../../../../store/IStore';

const reduxNormalizeEditTemplateData = (data: any): IEditTemplateReducer => {
	const response: any = {
		common: {
			_id: data._id,
			defaultLanguage: data.defaultLanguage,
			languages: data.languages,
			name: data.name,
			majorVersion: data.majorVersion,
			minorVersion: data.minorVersion,
		},
		design: {
			pages: {},
			elements: {
				byId: {},
				allIds: [],
			},
		},
	}

	const fetchElements = (elements: any): string[] => {
		const ids = []
		for (const element of elements) {
			if (element.elements) {
				element.elements = fetchElements(element.elements)
			}
			response.design!.elements.byId[element._id] = element
			response.design!.elements.allIds.push(element._id)
			ids.push(element._id)
		}
		return ids
	}

	response.design!.pages = Object.keys(data.design.pages).reduce((prev: any, key: string) => {
		const currentPage = data.design.pages[key]
		const { defaultHeader, defaultFooter } = data.design

		response.design!.elements.allIds.push(defaultHeader._id)
		response.design!.elements.allIds.push(defaultFooter._id)

		defaultHeader.elements = defaultHeader.elements ? fetchElements(defaultHeader.elements) : []
		defaultFooter.elements = defaultFooter.elements ? fetchElements(defaultFooter.elements) : []

		response.design!.elements.byId[defaultHeader._id] = defaultHeader
		response.design!.elements.byId[defaultFooter._id] = defaultFooter

		prev[key] = {
			_meta: currentPage._meta,
			style: currentPage.style,
			elements: fetchElements(currentPage.elements),
		}
		return prev
	}, {})
	return response
}

const setDefaultPageDesignForEmptyTemplates = (template: any) => {
	const page = defaultReducerObjects.PageObject
	const bodyElement = defaultReducerObjects.SingleLayoutBodyObject(1, {
		marginTop: '0px',
		marginBottom: '0px',
		marginRight: '40px',
		marginLeft: '40px',
	})
	page.elements.push(bodyElement)

	template.design = {
		defaultHeader: defaultReducerObjects.HeaderObject,
		defaultFooter: defaultReducerObjects.FooterObject,
		pages: {
			'1': page,
		},
	}

	return template
}

const demoTemplate: any = {
	_id: '1',
	name: 'Sample Template Name',
	defaultLanguage: 'tr',
	languages: ['tr', 'en'],
	majorVersion: 0,
	minorVersion: 1,
}

const { setElementStyle, setElementValue } = actions

const resizeBody = (style: CSSProperties) => (dispatch: any, getState: any) => {
	const state = getState()
	const activePage = selectors.activePageNumber(state)
	const body = selectors.currentPageBody(state)

	dispatch(actions.setElementStyle(body, style, activePage))
}

// #region TEMPLATE
const fetchTempate = (id: string) => (dispatch: any) => {
	dispatch(actions.startFetchingTemplate())

	setTimeout(() => {
		let template = demoTemplate
		if (!template.design) {
			template = setDefaultPageDesignForEmptyTemplates(template)
		}
		dispatch(actions.initTemplate(reduxNormalizeEditTemplateData(template)))
		dispatch(actions.endFetchingTemplate())
	}, 0)
}
// #endregion

const changeHeaderStatus = (isEnabled: boolean) => (dispatch: any, getState: any) => {
	const state = getState()
	const pageNo = selectors.activePageNumber(state)
	const page = selectors.currentPage(state)!
	dispatch(actions.changeHeaderStatus(isEnabled, pageNo, page))
}

const changeFooterStatus = (isEnabled: boolean) => (dispatch: any, getState: any) => {
	const state = getState()
	const pageNo = selectors.activePageNumber(state)
	const page = selectors.currentPage(state)!
	dispatch(actions.changeFooterStatus(isEnabled, pageNo, page))
}

const changeLayout = (layoutType: pageLayout) => (dispatch: any, getState: any) => {
	const state = getState()
	const currentPageNo = selectors.activePageNumber(state)
	const currentPage = selectors.currentPage(state)!
	const hasHeader = selectors.hasHeader(state)
	const hasFooter = selectors.hasFooter(state)

	const marginStyle = {
		marginLeft: `${currentPage._meta.margin.left}px`,
		marginRight: `${currentPage._meta.margin.right}px`,
		marginTop: hasHeader ? '0px' : `${currentPage._meta.margin.top}px`,
		marginBottom: hasFooter ? '0px' : `${currentPage._meta.margin.bottom}px`,
	}

	let layoutBody
	switch (layoutType) {
		case pageLayout.singleColumn:
		default:
			layoutBody = defaultReducerObjects.SingleLayoutBodyObject(currentPageNo, marginStyle)
			break
		case pageLayout.doubleColumn:
			layoutBody = defaultReducerObjects.DoubleLayoutBodyObject(currentPageNo, marginStyle)
			break
		case pageLayout.tripleColumn:
			layoutBody = defaultReducerObjects.TripleLayoutBodyObject(currentPageNo, marginStyle)
			break
		case pageLayout.singleTopDoubleBottom:
			layoutBody = defaultReducerObjects.SingleTopDoubleBottomBodyObject(
				currentPageNo,
				marginStyle
			)
			break
		case pageLayout.doubleTopSingleBottom:
			layoutBody = defaultReducerObjects.DoubleTopSingleBottomBodyObject(
				currentPageNo,
				marginStyle
			)
			break
		case pageLayout.singleTopDoubleMiddleSingleBottom:
			layoutBody = defaultReducerObjects.DoubleMiddleBodyObject(currentPageNo, marginStyle)
			break
	}
	dispatch(
		actions.changeLayout({
			pageNo: currentPageNo,
			layoutBody,
			layout: layoutType,
		})
	)
}

const addNewElement = actions.addElement;
const selectElement = (id:string) => (dispatch:any, getState:any) => {
	const state:IStore = getState();
	const selectedElementId = selectors.selectedElementId(state);

	if(!selectedElementId || selectedElementId !== id){
		dispatch(actions.selectElement(id));
	}

}
const deSelectElement = () => (dispatch:any, getState:any) => {
	const state:IStore = getState();
	const selectedElementId = selectors.selectedElementId(state);
	if(selectedElementId){
		dispatch(actions.deSelectElement())
	}
};
const moveElement = (element:IElement, targetContainerId:string) => (dispatch:any) => {
	if(element._meta.containerId !== targetContainerId){
		dispatch(actions.changeElementContainer(element, targetContainerId))
	}else{
		dispatch(actions.setElementStyle(element, element.style));
	}

}

export default {
	fetchTempate,
	setElementStyle,
	resizeBody,
	changeHeaderStatus,
	changeFooterStatus,
	changeLayout,
	addNewElement,
	moveElement,
	selectElement,
	deSelectElement,
	setElementValue
}
