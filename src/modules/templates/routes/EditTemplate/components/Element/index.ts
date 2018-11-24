import {connect} from 'react-redux';
import {editTemplateOperations, editTemplateSelectors} from '../../ducks';
import Element from './Element';
import IStore from '../../../../../../store/IStore';
import { IElement } from '../../ducks/interfaces';

const dispatchToProps = (dispatch:any) => ({
    select: (id:string) => dispatch(editTemplateOperations.selectElement(id)),
    onValueChanged:(element:IElement, value:any) => dispatch(editTemplateOperations.setElementValue(element, value))
})

const mapStateToProps = (state:IStore) => ({
    selectedElement: editTemplateSelectors.selectedElement(state)
})

export default connect(mapStateToProps, dispatchToProps)(Element);