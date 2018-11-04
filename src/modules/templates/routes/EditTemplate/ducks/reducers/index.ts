import undoable from 'redux-undo'
import { combineReducers } from 'redux'
import commonReducer from './common.reducer'
import stateReducer from './state.reducer'
import designReducer from './designReducer'

const reducer = combineReducers({
	state: stateReducer,
	common: commonReducer,
	design: undoable(designReducer, { limit: 15 }),
})

export default reducer
