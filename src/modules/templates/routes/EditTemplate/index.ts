import { connect } from 'react-redux';
import EditTemplate from './EditTemplate';
import {editTemplateSelectors} from './ducks';
import IStore from '../../../../store/IStore';

const mapStateToProps = (state: IStore): object => ({
    info: editTemplateSelectors.info(state),
    languages: editTemplateSelectors.infoLanguagesAsText(state),
    options: editTemplateSelectors.options(state)
})

export default connect(mapStateToProps)(EditTemplate);