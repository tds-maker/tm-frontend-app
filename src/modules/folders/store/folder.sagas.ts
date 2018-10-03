import { call, fork, takeEvery, put, select } from "redux-saga/effects";
import { START_FETCHING_FOLDERS, CREATE_FOLDER, foldersFetched, fetchFolders, selectFolder } from "./folder.actions";
import { addNotify } from "../../../store/actions/app.actions";
import HttpProvider from "../../../utils/http.provider";
import IAction from "../../../store/IAction";
import Folder from "../models/Folder";

function* getFolders({ type, payload }: IAction) {
	try {
		const data = yield call(HttpProvider.get, "/folders/template");
		yield put(foldersFetched(payload.folderType, data));
		if (payload.selectedFolderId) {
			yield put(selectFolder(payload.selectedFolderId, "template"));
		}
	} catch (error) {}
}

function* createFolder({ type, payload }: IAction) {
	try {
		const state = yield select();
		const selectedFolder: Folder = state.templateFolders.find((x: Folder) => x.isCurrent);

		const result = yield call(HttpProvider.post, "/folders/template", {
			parentId: selectedFolder._id,
			name: payload.name
		});

		if (result.status) {
			yield put(fetchFolders("template", result.data._id));
		} else {
			yield put(addNotify("Attention!", result.message, "error", 3500));
		}
	} catch (error) {}
}

function* watchGetFolders() {
	yield takeEvery(START_FETCHING_FOLDERS, getFolders);
}

function* watchCreateFolder() {
	yield takeEvery(CREATE_FOLDER, createFolder);
}

export default [fork(watchGetFolders), fork(watchCreateFolder)];
