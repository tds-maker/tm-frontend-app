import IAction from '../IAction'
import {
	editTemplateOperations,
	editTemplateTypes,
} from '../../modules/templates/routes/EditTemplate/ducks'

const undoRedoMiddleware = ({ getState, dispatch }: any) => {
	return (next: any) => (action: IAction) => {
		const prevState = getState()
		const returnValue = next(action)

		if (action.hasAudit) {
			dispatch(editTemplateOperations.addToHistory(prevState.template.editTemplate.design))
		} else if (action.type === editTemplateTypes.UNDO) {
			dispatch(
				editTemplateOperations.addToHistoryNext(prevState.template.editTemplate.design)
			)
		} else if (action.type === editTemplateTypes.REDO) {
			dispatch(
				editTemplateOperations.addToHistoryPrev(prevState.template.editTemplate.design)
			)
		}

		return returnValue
	}
}
export default undoRedoMiddleware
