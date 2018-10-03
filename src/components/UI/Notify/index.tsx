import { connect } from "react-redux";

import Notify, { IProps } from "./Notify";
import IStore from "../../../store/IStore";

const mapStateToProps = (state: IStore) => ({
	notifications: state.app.notifications
});

export default connect<any, any, IProps>(mapStateToProps)(Notify);
