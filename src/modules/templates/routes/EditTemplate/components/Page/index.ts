import { connect } from 'react-redux'
import Page from './Page'
import { editTemplateOperations, editTemplateSelectors } from '../../ducks'
import IStore from '../../../../../../store/IStore'

const mapStateToProps = (state: IStore) => ({
	page: editTemplateSelectors.currentPage(state),
})

const mapDispatchToProps = (dispatch:any) =>({
	deselectElement: () => dispatch(editTemplateOperations.deSelectElement())
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
