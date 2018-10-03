import { connect } from "react-redux";

import IStore from "../../../../store/IStore";
import { getTemplates } from "../../store/templates/templates.actions";

import TemplatesTable, { IProps } from "./TemplatesTable";
import Folder from "../../../folders/models/Folder";
import Template from "../../models/Template";

const mapStateToProps = (state: IStore) => {
	const selectedFolder: Folder = state.templateFolders.find((folder: Folder) => folder.isCurrent)!;
	const templates: Template[] = state.templates.filter((template: Template) => template.folderId === selectedFolder._id);
	return { templates, selectedFolder };
};

const mapDispatchToState = (dispatch: any) => ({
	getTemplates: () => dispatch(getTemplates())
});

export default connect<any, any, IProps>(
	mapStateToProps,
	mapDispatchToState
)(TemplatesTable);
