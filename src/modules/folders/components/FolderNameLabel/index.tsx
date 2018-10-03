import { connect } from "react-redux";

import FolderNameLabel, { IProps } from "./FolderNameLabel";
import IStore from "../../../../store/IStore";
import Folder from "../../models/Folder";

const mapStateToProps = (state: IStore, ownProps: IProps) => ({
	selectedFolder: state[`${ownProps.folderType}Folders`].find((folder: Folder) => folder.isCurrent)
});

export default connect<any, any, IProps>(mapStateToProps)(FolderNameLabel);
