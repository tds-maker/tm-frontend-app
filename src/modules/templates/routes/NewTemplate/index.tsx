import { connect } from "react-redux";

import IAction from "../../../../store/IAction";
import NewTemplate, { IProps } from "./NewTemplate";

import "./assets/css/icons.scss";
import "./assets/css/style.scss";

const mapDispatchToProps = (dispatch: any) => ({
	action: (action: IAction) => dispatch(action)
});

export default connect<any, any, IProps>(
	null,
	mapDispatchToProps
)(NewTemplate);
