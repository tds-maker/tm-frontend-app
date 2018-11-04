import { connect } from 'react-redux'
import PageFooter from './PageFooter'
import { editTemplateOperations, editTemplateSelectors } from '../../../ducks'
import IStore from '../../../../../../../store/IStore'
import { IElement } from '../../../ducks/interfaces'

const mapStateToProps = (state: IStore) => ({
	footer: editTemplateSelectors.currentFooter(state),
})

const mapDispatchToProps = (dispatch: any) => ({
	changeStyle: (element: IElement, style: object) =>
		dispatch(editTemplateOperations.setElementStyle(element, style)),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PageFooter)
