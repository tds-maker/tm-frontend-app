import types from './types'
import IAction from '../../../../../store/IAction'
import { CSSProperties } from 'react'
import { IElement, IPage } from './interfaces'

const setElementStyle = (element: IElement, style: CSSProperties, options?: any): IAction => ({
	type: types.SET_ELEMENT_STYLE,
	payload: {
		element,
		style,
		options,
	},
})

const setElementValue = (element: IElement, value: any):IAction => ({
	type: types.UPDATE_ELEMENT_VALUE,
	payload: {
		element,
		value
	}
})

const changeHeaderStatus = (isEnabled: boolean, pageNo: number, page: IPage): IAction => ({
	type: types.CHANGE_HEADER_STATUS,
	payload: {
		isEnabled,
		pageNo,
		page,
	},
})

const changeFooterStatus = (isEnabled: boolean, pageNo: number, page: IPage): IAction => ({
	type: types.CHANGE_FOOTER_STATUS,
	payload: {
		isEnabled,
		pageNo,
		page,
	},
})

const changeLayout = (payload: any): IAction => ({
	type: types.CHANGE_LAYOUT,
	payload,
})

// #region TEMPLATE
const startFetchingTemplate = (): IAction => ({
	type: types.START_FETCHING_TEMPLATE,
})

const endFetchingTemplate = (): IAction => ({
	type: types.END_FETCHING_TEMPLATE,
})

const initTemplate = (template: any): IAction => ({
	type: types.INIT_EDIT_TEMPLATE,
	payload: template,
})
// #endregion

const addElement = (element:IElement):IAction => ({
	type: types.ADD_ELEMENT,
	payload : element
});

const changeElementContainer = (element:IElement, newContainerId:string):IAction =>({
	type : types.CHANGE_ELEMENT_CONTAINER,
	payload: {
		element, newContainerId
	}
})
const selectElement = (elementId:string):IAction => ({
	type: types.SELECT_ELEMENT,
	payload : elementId
})

const deSelectElement = ():IAction => ({
	type: types.DE_SELECT_ELEMENT,
})
export default {
	startFetchingTemplate,
	endFetchingTemplate,
	initTemplate,
	setElementStyle,
	changeHeaderStatus,
	changeFooterStatus,
	changeLayout,
	addElement,
	changeElementContainer,
	selectElement,
	deSelectElement,
	setElementValue
}
