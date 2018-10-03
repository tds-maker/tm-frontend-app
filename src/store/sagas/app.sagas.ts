import { fork, takeEvery, put } from "redux-saga/effects";
import { delay } from "redux-saga";
import { ADD_NOTIFY, removeNotify } from "../actions/app.actions";
import IAction from "../IAction";

function* addNotify({ type, payload }: IAction) {
	try {
		yield delay(payload.duration);
		yield put(removeNotify(payload.id));
	} catch (error) {}
}

function* watchAddNotify() {
	yield takeEvery(ADD_NOTIFY, addNotify);
}

export default [fork(watchAddNotify)];
