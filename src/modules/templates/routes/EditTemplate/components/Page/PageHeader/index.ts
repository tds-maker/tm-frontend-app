import { connect } from 'react-redux'
import PageHeader from './PageHeader'
import { editTemplateOperations, editTemplateSelectors } from '../../../ducks'
import IStore from '../../../../../../../store/IStore'
import { IElement } from '../../../ducks/interfaces'

const mapStateToProps = (state: IStore) => ({
	header: editTemplateSelectors.currentHeader(state),
	// seletedElement: editTemplateSelectors.selectedElement(state),
})

const mapDispatchToProps = (dispatch: any) => ({
	changeStyle: (element: IElement, style: object) =>
		dispatch(editTemplateOperations.setElementStyle(element, style)),
	// selectHeader: (el: any, options: any) =>
	// 	dispatch(editTemplateOperations.selectElement(el, options)),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PageHeader)
