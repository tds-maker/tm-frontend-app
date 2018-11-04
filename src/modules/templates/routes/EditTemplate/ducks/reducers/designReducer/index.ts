import { combineReducers } from 'redux'
import pagesReducer from './pages.reducer'
import elementsReducer from './elements.reducer'

const designRecucer = combineReducers({
	pages: pagesReducer,
	elements: elementsReducer,
})

export default designRecucer
