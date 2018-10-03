import { Record, fromJS } from "immutable";
import Folder from "./Folder";

interface IFolderState {
	folders: Folder[];
	current: Folder;
}
const FolderStateRecord = Record({
	folders: [],
	current: undefined
});

export default class FolderState extends FolderStateRecord implements IFolderState {
	public folders: Folder[];
	public current: Folder;
	constructor(params?: any) {
		super(fromJS(params));
	}
}
