import types from '../types'
import IAction from '../../../../../../store/IAction'
import { IElementsStore } from '../interfaces'

const elementsReducer = (state: IElementsStore = {}, action: IAction): IElementsStore => {
	switch (action.type) {
		case types.SELECT_ELEMENT:
			return {
				...state,
				selectedElement: action.payload,
			}
		case types.ENABLE_DISABLE_HEADER:
			return {
				...state,
				selectedElement: undefined,
			}
		default:
			return state
	}
}

export default elementsReducer
