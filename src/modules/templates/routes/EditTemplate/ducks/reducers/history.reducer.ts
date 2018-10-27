import types from '../types'
import { IUndeRedoStore } from '../interfaces'
import IAction from '../../../../../../store/IAction'
import { defaultHistoryState } from './defaults';

const historyReducer = (state = defaultHistoryState, action: IAction): IUndeRedoStore => {
	switch (action.type) {
		case types.ADD_TO_HISTORY:
			return {
				nextStates: [],
				prevStates: [...state.prevStates, action.payload],
			}
		case types.ADD_TO_HISTORY_NEXT:
			return {
				...state,
				nextStates: [action.payload, ...state.nextStates],
			}
		case types.ADD_TO_HISTORY_PREV:
			return {
				...state,
				prevStates: [...state.prevStates, action.payload],
			}
		case types.UNDO:
			const index = state.prevStates.length - 1
			return {
				...state,
				prevStates: [...state.prevStates.slice(0, index)],
			}
		case types.REDO:
			return {
				...state,
				nextStates: [...state.nextStates.slice(0 + 1)],
			}
		default:
			return state
	}
}

export default historyReducer
