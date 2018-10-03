import { Record, fromJS } from "immutable";

interface IFolderItem {
	_id: string;
	name: string;
	version: string;
	modifiedBy: string;
}

interface IFolder {
	_id: string;
	name: string;
	folderType: string;
	parentId?: string;
	items: IFolderItem[];
	isCurrent: boolean;
	isOpen: boolean;
}
const FolderRecord = Record({
	_id: "",
	name: "",
	folderType: "",
	parentId: undefined,
	isCurrent: false,
	isOpen: false
});

export default class Folder extends FolderRecord implements IFolder {
	public _id: string;
	public name: string;
	public folderType: string;
	public parentId?: string | undefined;
	public items: IFolderItem[];
	public isCurrent: boolean;
	public isOpen: boolean;

	constructor(params: any) {
		super(fromJS(params));
	}
}
