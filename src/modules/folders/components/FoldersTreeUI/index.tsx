import { connect } from "react-redux";
import IStore from "../../../../store/IStore";
import FoldersTree, { IProps } from "./FoldersTree";

const mapStateToProps = (state: IStore, ownProps: IProps) => {
  return { folders: state[`${ownProps.folderType}Folders`] };
};

const mapDispatchToProps = (dispatch: any) => ({
  dispatch
});

export default connect<any, any, IProps>(
  mapStateToProps,
  mapDispatchToProps
)(FoldersTree);
