import { fromJS, List, Record } from 'immutable'
export interface ITemplate {
	name: string
	isFetching: boolean
	languages: List<string>
	primaryLanguage: string
	productNumberOption: string
	folderId: string
	modifiedBy: {
		_id: string
		fullNameShort: string
	}
	version: string
	updatedAt: string
}

const TemplateRecord = Record({
	name: '',
	isFetching: false,
	languages: List(['en']),
	primaryLanguage: 'en',
	productNumberOption: 'optional',
	folderId: '',
	modifiedBy: {
		_id: '',
		fullNameShort: '',
	},
	version: 'v0.1',
	updatedAt: '',
})

export default class Template extends TemplateRecord implements ITemplate {
	public name: string
	public isFetching: boolean
	public languages: List<string>
	public primaryLanguage: string
	public productNumberOption: string
	public folderId: string
	public modifiedBy: {
		_id: string
		fullNameShort: string
	}
	public version: string
	public updatedAt: string

	constructor(props?: any) {
		super(fromJS(props))
	}
}
