import { connect } from 'react-redux'
import PageFooter from './PageFooter'
import { editTemplateOperations, editTemplateSelectors } from '../../ducks'
import IStore from '../../../../../../store/IStore'

const mapStateToProps = (state: IStore) => ({
	footer: editTemplateSelectors.activeFooter(state),
})

const mapDispatchToProps = (dispatch: any) => ({
	changeStyle: (style: object) => dispatch(editTemplateOperations.setFooterStyle(style)),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PageFooter)
