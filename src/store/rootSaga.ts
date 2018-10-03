import { all } from "redux-saga/effects";
import templateSagas from "../modules/templates/store/template/template.sagas";
import templatesSagas from "../modules/templates/store/templates/templates.sagas";
import folderSagas from "../modules/folders/store/folder.sagas";
import appSagas from "./sagas/app.sagas";

export default function*() {
	yield all([...appSagas, ...templateSagas, ...templatesSagas, ...folderSagas]);
}
