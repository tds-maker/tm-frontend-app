import types from '../types'
import { IAction, IEditTemplateStateReducer } from '../interfaces'
import update from 'immutability-helper'

const defaultState: IEditTemplateStateReducer = {
	activePage: 1,
	activeToolbar: 'text',
	fetchedFromServer: false,
}
const stateReducer = (
	state: IEditTemplateStateReducer = defaultState,
	action: IAction
): IEditTemplateStateReducer => {
	switch (action.type) {
		case types.END_FETCHING_TEMPLATE:
			return {
				...state,
				fetchedFromServer: true,
			}
		case types.SELECT_ELEMENT:
			return update(state, {
				selectedElement: { $set: action.payload },
			})
		case types.DE_SELECT_ELEMENT:
			return update(state, {
				selectedElement: { $set: undefined },
			})
		default:
			return state
	}
}

export default stateReducer
