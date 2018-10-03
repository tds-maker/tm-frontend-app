import { connect } from "react-redux";

import IStore from "../../../../../../store/IStore";
import TemplateTab, { IProps } from "./TemplateTab";
import Template from "../../../../models/Template";

interface IPropsFromState {
  template?: Template;
  languages?: object;
}

const mapStateToProps = (state: IStore) => ({
  template: state.template,
  languages: state.app.languages
});

interface IPropsFromDispatch {
  dispatch?: (dispatch: any) => void;
}

const mapDispatchToProps = (dispatch: any) => ({
  dispatch
});

export default connect<IPropsFromState, IPropsFromDispatch, IProps>(
  mapStateToProps,
  mapDispatchToProps
)(TemplateTab);
