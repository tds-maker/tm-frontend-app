import types from '../types'
import IEditTemplateReducer, { IAction, IEditTemplateCommonReducer } from '../interfaces'

const commonReducer = (
	state: IEditTemplateCommonReducer | {} = {},
	action: IAction
): IEditTemplateCommonReducer | {} => {
	switch (action.type) {
		case types.INIT_EDIT_TEMPLATE:
			const data = action.payload as IEditTemplateReducer
			return {
				...data.common,
			}
		default:
			return state
	}
}

export default commonReducer
