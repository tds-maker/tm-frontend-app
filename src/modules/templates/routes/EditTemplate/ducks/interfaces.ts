import { CSSProperties } from 'react'
import types from './types'
import { metaDomType, metaType, pageLayout } from './enums'

interface IMeta {
	typeName: metaType
	htmlDom: metaDomType
}

interface IPageBaseMeta {
	hasHeader: boolean
	hasFooter: boolean
	layout: pageLayout
	margin: {
		top: number
		bottom: number
		left: number
		right: number
	}
}

type IPageMeta = IMeta & IPageBaseMeta

export interface IElement {
	_id: string
	_meta: IMeta
	style: CSSProperties
	elements: string[]
}

export interface IPage {
	_meta: IPageMeta
	style: CSSProperties
	elements: string[]
}

export interface IAction {
	type: types
	payload?: any
}

export interface IPagesReducer {
	[key: number]: IPage
}
export interface IElementsReducer {
	byId: {
		[key: string]: IElement
	}
	allIds: string[]
}

export interface IEditTemplateStateReducer {
	fetchedFromServer: boolean
	activePage: number
	activeToolbar: string
}

export interface IEditTemplateCommonReducer {
	_id: string
	name: string
	defaultLanguage: string
	languages: string[]
	majorVersion: number
	minorVersion: number
}

export interface IEditTemplateDesignReducer {
	pages: IPagesReducer
	elements: IElementsReducer
}

export default interface IEditTemplateReducer {
	state?: IEditTemplateStateReducer
	common?: IEditTemplateCommonReducer
	design?: {
		past: any[]
		present: IEditTemplateDesignReducer
		future: any[]
		index: number
		limit: number
	}
}
