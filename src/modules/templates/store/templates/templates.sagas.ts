import { call, takeEvery, put, fork } from 'redux-saga/effects'
import { START_FETCHING_TEMPLATES, TEMPLATES_FETCHED } from './templates.actions'
import HttpProvider from '../../../../utils/http.provider'

export function* getTemplates() {
	try {
		const data = yield call(HttpProvider.get, '/templates')
		yield put({ type: TEMPLATES_FETCHED, payload: data })
	} catch (error) {}
}

export function* watchFetchingTemplates() {
	yield takeEvery(START_FETCHING_TEMPLATES, getTemplates)
}

export default [fork(watchFetchingTemplates)]
