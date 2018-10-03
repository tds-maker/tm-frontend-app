import IAction from "../../../store/IAction";
import Folder from "../models/Folder";
import BaseReducer from "../../../store/BaseReducer";
import { List } from "immutable";

abstract class FolderReducer extends BaseReducer<List<Folder>> {
	public foldersFetched(state: List<Folder>, payload: any): List<Folder> {
		const { data, source } = payload;

		if (!this.isForCurrentInstance(source)) {
			return state;
		}

		return state.merge(
			data.map((x: any) => {
				const isCurrent = x.parentId === undefined;
				const isOpen = x.parentId === undefined;
				return new Folder({
					...x,
					isCurrent,
					isOpen
				});
			})
		);
	}

	public selectFolder(state: List<Folder>, payload: any): List<Folder> {
		if (!this.isForCurrentInstance(payload.folderType)) {
			return state;
		}

		const targetFolder = state.find((folder: Folder) => folder._id === payload.id && folder.isCurrent);

		// don't select 2 times
		if (targetFolder) {
			return state;
		}
		return state.map((x: Folder) => {
			if (x._id === payload.id || x.isCurrent) {
				return x.set("isCurrent", !x.isCurrent);
			} else {
				return x;
			}
		}) as List<Folder>;
	}

	public toggleFolder(state: List<Folder>, payload: any): List<Folder> {
		if (!this.isForCurrentInstance(payload.folderType)) {
			return state;
		}
		const folder = state.find((x: Folder) => x._id === payload.id);
		const indexOf = state.indexOf(folder);
		return state.set(indexOf, folder.set("isOpen", !folder.isOpen) as Folder);
	}

	private isForCurrentInstance(folderType: string): boolean {
		return (folderType === "datasheet" && this instanceof DatasheetFolderReducer) || (folderType === "template" && this instanceof TemplateFolderReducer);
	}
}

class TemplateFolderReducer extends FolderReducer {}
class DatasheetFolderReducer extends FolderReducer {}

const templateReducer = new TemplateFolderReducer();
const templateReducerFunc = (state: List<Folder> = List<Folder>(), action: IAction) => {
	return templateReducer.call(state, action);
};

const datasheetReducer = new DatasheetFolderReducer();
const datasheetReducerFunc = (state: List<Folder> = List<Folder>(), action: IAction) => {
	return datasheetReducer.call(state, action);
};

export default {
	templateFoldersReducer: templateReducerFunc,
	datasheetFoldersReducer: datasheetReducerFunc
};
