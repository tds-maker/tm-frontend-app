import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import sagas from './rootSaga'

import userReducer from './reducers/user.reducer'
import appReducer from './reducers/app.reducer'
import templateReducer from '../modules/templates/store/template/template.reducer'
import templatesReducer from '../modules/templates/store/templates/templates.reducer'
import folderReducers from '../modules/folders/store/folder.reducers'

const enhancers: any = []
let composeEnhancers = compose

if (process.env.NODE_ENV === 'development') {
	if (typeof (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
		composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	}
}

const sagaMiddleware = createSagaMiddleware()

const allReducers = combineReducers({
	app: appReducer,
	user: userReducer,
	template: templateReducer,
	templates: templatesReducer,
	templateFolders: folderReducers.templateFoldersReducer,
	datasheetFolders: folderReducers.datasheetFoldersReducer,
})

const store = createStore(
	allReducers,
	composeEnhancers(applyMiddleware(sagaMiddleware), ...enhancers)
)

sagaMiddleware.run(sagas)

export default store
