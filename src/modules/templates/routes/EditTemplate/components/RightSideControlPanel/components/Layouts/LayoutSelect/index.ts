import { connect } from 'react-redux'
import LayoutSelect from './LayoutSelect'
import { editTemplateOperations, editTemplateSelectors } from '../../../../../ducks'
import IStore from '../../../../../../../../../store/IStore'
import { pageLayout } from '../../../../../ducks/enums'

const mapStateToProps = (state: IStore) => ({
	selectedLayout: editTemplateSelectors.getLayout(state),
})

const mapDispatchToProps = (dispatch: any) => ({
	onLayoutChange: (layout: pageLayout) => dispatch(editTemplateOperations.changeLayout(layout)),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LayoutSelect)
