import { connect } from 'react-redux'
import EditTemplate from './EditTemplate'
import { editTemplateOperations, editTemplateSelectors } from './ducks'
import IStore from '../../../../store/IStore'

const mapStateToProps = (state: IStore): object => ({
	info: editTemplateSelectors.info(state),
	languages: editTemplateSelectors.infoLanguagesAsText(state),
	options: editTemplateSelectors.options(state),
})

const mapDispatchToProps = (dispatch:any) => ({
	fetchTemplate: (id:string) => dispatch(editTemplateOperations.fetchTempate(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditTemplate)
