import { connect } from 'react-redux';
import PageBody from './PageBody';
import IStore from '../../../../../../store/IStore';
import {editTemplateOperations, editTemplateSelectors} from '../../ducks';

const mapStateToProps = (state: IStore) => ({
    body: editTemplateSelectors.activePageBody(state),
    hasHeader: editTemplateSelectors.activePage(state)._meta.hasHeader,
    hasFooter: editTemplateSelectors.activePage(state)._meta.hasFooter
})

const mapDispatchToProps = (dispatch:any) => ({
    onResize: (styles: any) => dispatch(editTemplateOperations.setPagePadding(styles))
})

export default connect(mapStateToProps, mapDispatchToProps)(PageBody);