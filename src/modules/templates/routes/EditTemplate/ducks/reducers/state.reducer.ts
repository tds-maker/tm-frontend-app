import types from '../types'
import { IAction, IEditTemplateStateReducer } from '../interfaces'

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
		default:
			return state
	}
}

export default stateReducer
