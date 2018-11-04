import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import userReducer from './reducers/user.reducer'
import appReducer from './reducers/app.reducer'
import templateReducer from '../modules/templates/store'

const enhancers: any = []
let composeEnhancers = compose

if (process.env.NODE_ENV === 'development') {
	if (typeof (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
		composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	}
}

// const sagaMiddleware = createSagaMiddleware()

const allReducers = combineReducers({
	app: appReducer,
	user: userReducer,
	template: templateReducer,
})

const store = createStore(allReducers, composeEnhancers(applyMiddleware(thunk), ...enhancers))
export default store
