import {connect} from 'react-redux';
import Toolbar from './Toolbar';
import {editTemplateOperations, editTemplateSelectors} from '../../ducks'
import IStore from '../../../../../../store/IStore';
import { IElement } from '../../ducks/interfaces';
import { CSSProperties } from 'react';

const mapStateToProps = (state:IStore) => ({
    element: editTemplateSelectors.selectedElement(state)
})

const mapDispatchToProps = (dispatch:any) => ({
    setElementStyle : (element:IElement, style: CSSProperties) => dispatch(editTemplateOperations.setElementStyle(element, style))
})

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);