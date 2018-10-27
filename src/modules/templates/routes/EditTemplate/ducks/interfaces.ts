export interface IInfoStore {
	name: string
	languages: string[]
	defaultLanguage: string
	version: string
}

export interface IOptionsStore {
	activeToolbar: string
	activePage: number
}

export interface IPage {
	_meta: {
		pageNo: number
		hasHeader: boolean
		hasDefaultHeader: boolean
		hasDefaultFooter: boolean
		hasFooter: boolean
		margin: {
			top: number
			bottom: number
			left: number
			right: number
		}
	}
	style: any
}
export interface IPagesStore {
	[key: number]: IPage
}

export interface IBody {
	style: object
}
export interface IBodyStore {
	[key: number]: IBody
}

export interface IHeader {
	_meta: {
		page: number
	}
	style: any
}
export interface IHeaderStore {
	[key: number]: IHeader
}

export interface IFooter {
	_meta: {
		page: number
	}
	style: any
}
export interface IFooterStore {
	[key: number]: IFooter
}

export interface IUndeRedoStore {
	prevStates: any[]
	nextStates: any[]
}

export interface IElementsStore {
	selectedElement?: any
}

export default interface IEditTemplateStore {
	info: IInfoStore
	options: IOptionsStore
	design: {
		pages: IPagesStore
		bodies: IBodyStore
		headers: IHeaderStore
		footers: IFooterStore
		elements: any
	}
	history: IUndeRedoStore
}
