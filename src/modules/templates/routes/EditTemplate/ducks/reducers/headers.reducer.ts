import types from '../types'
import { IHeaderStore } from '../interfaces'
import IAction from '../../../../../../store/IAction'
import { defaultHeaderState } from './defaults'

const headersReducer = (state = defaultHeaderState, action: IAction): IHeaderStore => {
	switch (action.type) {
		case types.CHANGE_HEADER_STYLE:
			return {
				...state,
				[action.payload.page]: {
					...state[action.payload.page],
					style: action.payload.style,
				},
			}
		case types.UNDO:
		case types.REDO:
			return JSON.parse(JSON.stringify(action.payload.headers))
		default:
			return state
	}
}

export default headersReducer
