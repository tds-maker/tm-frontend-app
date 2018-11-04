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

export default {
	startFetchingTemplate,
	endFetchingTemplate,
	initTemplate,
	setElementStyle,
	changeHeaderStatus,
	changeFooterStatus,
	changeLayout,
}
