import { connect } from 'react-redux'
import Page from './Page'
import { editTemplateSelectors } from '../../ducks'
import IStore from '../../../../../../store/IStore'

const mapStateToProps = (state: IStore) => ({
	page: editTemplateSelectors.currentPage(state),
})

export default connect(mapStateToProps)(Page)
