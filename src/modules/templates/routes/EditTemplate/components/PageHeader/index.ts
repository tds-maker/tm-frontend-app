import { connect } from 'react-redux';
import PageHeader from './PageHeader';
import {editTemplateOperations, editTemplateSelectors} from '../../ducks';
import IStore from '../../../../../../store/IStore';

const mapStateToProps = (state: IStore) => ({
    header: editTemplateSelectors.activeHeader(state),
    seletedElement: editTemplateSelectors.selectedElement(state)
})

const mapDispatchToProps = (dispatch:any) => ({
    changeStyle: (style:object) => dispatch(editTemplateOperations.setHeaderStyle(style)),
    selectHeader: (el:any, options:any) => dispatch(editTemplateOperations.selectElement(el, options))
})

export default connect(mapStateToProps, mapDispatchToProps)(PageHeader);