import { connect } from 'react-redux'
import PageBody from './PageBody'
import IStore from '../../../../../../../store/IStore'
import { editTemplateOperations, editTemplateSelectors } from '../../../ducks'
import { CSSProperties } from 'react'

const mapStateToProps = (state: IStore) => ({
	body: editTemplateSelectors.currentPageBody(state),
	hasHeader: editTemplateSelectors.hasHeader(state),
	hasFooter: editTemplateSelectors.hasFooter(state),
	elements: editTemplateSelectors.elementsById(state),
	layout: editTemplateSelectors.getLayout(state),
	pageNo: editTemplateSelectors.activePageNumber(state),
})

const mapDispatchToProps = (dispatch: any) => ({
	setMargins: (style: CSSProperties) => dispatch(editTemplateOperations.resizeBody(style)),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PageBody)
