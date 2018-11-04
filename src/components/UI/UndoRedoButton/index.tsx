import { connect } from 'react-redux'
import { ActionCreators } from 'redux-undo'
import UndoRedoButton from './UndoRedoButton'
import { editTemplateSelectors } from '../../../modules/templates/routes/EditTemplate/ducks'
import IStore from '../../../store/IStore'

const mapDispatchToState = (dispatch: any) => ({
	handleClickUndo: () => dispatch(ActionCreators.undo()),
	handleClickRedo: () => dispatch(ActionCreators.redo()),
})

const mapStateToProps = (state: IStore) => ({
	undoEnabled: editTemplateSelectors.hasUndoEnabled(state),
	redoEnabled: editTemplateSelectors.hasRedoEnabled(state),
})

export default connect(
	mapStateToProps,
	mapDispatchToState
)(UndoRedoButton)
