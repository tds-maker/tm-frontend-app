import types from '../types'
import { IInfoStore } from '../interfaces'
import IAction from '../../../../../../store/IAction'

const informationReducer = (store = {} as IInfoStore, action: IAction): IInfoStore => {
	switch (action.type) {
		case types.INIT_EDIT_TEMPLATE:
			const { languages, defaultLanguage, name, version } = action.payload
			return {
				languages,
				defaultLanguage,
				name,
				version,
			}
		default:
			return store
	}
}

export default informationReducer
