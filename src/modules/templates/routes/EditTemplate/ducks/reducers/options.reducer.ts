import { IOptionsStore } from '../interfaces';
import IAction from '../../../../../../store/IAction';
import types from '../types';
import { defaultOptionsState } from './defaults';

const optionsReducer = (state = defaultOptionsState, action: IAction): IOptionsStore => {
	switch (action.type) {
		case types.SELECT_ELEMENT:
			return {
				...state,
				activeToolbar: action.payload.options.type,
			}
		case types.ENABLE_DISABLE_HEADER:
			return {
				...state,
				activeToolbar: 'text',
			}
		default:
			return state
	}
}

export default optionsReducer
