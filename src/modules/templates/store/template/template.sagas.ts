import { call, fork, put, select, takeEvery } from 'redux-saga/effects'
import { addNotify } from '../../../../store/actions/app.actions'
import IAction from '../../../../store/IAction'
import HttpProvider from '../../../../utils/http.provider'
import Folder from '../../../folders/models/Folder'
import Template from '../../models/Template'
import {
	CREATE_NEW_TEMPLATE,
	LOAD_TEMPLATE,
	NEW_TEMPLATE_CREATED,
	TEMPLATE_FETCHED,
} from './template.actions'

export function* initTemplate({ type, payload }: IAction) {
	try {
		const data = yield call(HttpProvider.get, `/templates/${payload}`)
		yield put({ type: TEMPLATE_FETCHED, payload: data })
	} catch (error) {
		// yield put({type : FETCH_ERROR })
	}
}

export function* createNewTemplate() {
	try {
		const state = yield select()
		const templateState: Template = state.template as Template
		const selectedFolder: Folder = state.templateFolders.find(
			(folder: Folder) => folder.isCurrent
		)

		if (!selectedFolder) return

		const templateModel = {
			name: templateState.name,
			productNumberOption: templateState.productNumberOption,
			languages: templateState.languages,
			primaryLanguage: templateState.primaryLanguage,
			folderId: selectedFolder._id,
		}

		const data = yield call(HttpProvider.post, `/templates`, templateModel)
		if (data.status) {
			yield put({ type: NEW_TEMPLATE_CREATED })
		} else {
			yield put(
				addNotify(
					'Change Template Name or Selected Folder',
					'You already have the same template name in selected folder!',
					'error'
				)
			)
		}
	} catch (error) {}
}

export function* watchLoadTemplate() {
	yield takeEvery(LOAD_TEMPLATE, initTemplate)
}

export function* watchCreateNewTemplate() {
	yield takeEvery(CREATE_NEW_TEMPLATE, createNewTemplate)
}

export default [fork(watchLoadTemplate), fork(watchCreateNewTemplate)]
