import IAction from "../../../store/IAction";

export const START_FETCHING_FOLDERS = "FOLDERS/START_FETCHING_FOLDERS";
export const FOLDERS_FETCHED = "FOLDERS/FOLDERS_FETCHED";
export const SELECT_FOLDER = "FOLDERS/SELECT_FOLDER";
export const TOGGLE_FOLDER = "FOLDERS/TOGGLE_FOLDER";
export const CREATE_FOLDER = "FOLDERS/CREATE_FOLDER";

export const fetchFolders = (folderType: string, selectedFolderId?: string): IAction => ({
	type: START_FETCHING_FOLDERS,
	payload: {
		folderType,
		selectedFolderId
	}
});

export const foldersFetched = (folderType: string, data: any): IAction => ({ type: FOLDERS_FETCHED, payload: { data, source: folderType } });

export const selectFolder = (id: string, folderType: string): IAction => ({
	type: SELECT_FOLDER,
	payload: { id, folderType }
});

export const toggleFolder = (id: string, folderType: string): IAction => ({
	type: TOGGLE_FOLDER,
	payload: { id, folderType }
});

export const createFolder = (folderType: string, name: string): IAction => ({
	type: CREATE_FOLDER,
	payload: {
		name,
		folderType
	}
});
