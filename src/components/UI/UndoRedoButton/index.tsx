import { connect } from 'react-redux'
import UndoRedoButton from './UndoRedoButton'
import {
	editTemplateOperations,
	editTemplateSelectors,
} from '../../../modules/templates/routes/EditTemplate/ducks'
import IStore from '../../../store/IStore'

const mapDispatchToState = (dispatch: any) => ({
	handleClickUndo: () => dispatch(editTemplateOperations.undo()),
	handleClickRedo: () => dispatch(editTemplateOperations.redo()),
})

const mapStateToProps = (state: IStore) => ({
	undoEnabled: editTemplateSelectors.hasUndoEnabled(state),
	redoEnabled: editTemplateSelectors.hasRedoEnabled(state),
})

export default connect(
	mapStateToProps,
	mapDispatchToState
)(UndoRedoButton)
