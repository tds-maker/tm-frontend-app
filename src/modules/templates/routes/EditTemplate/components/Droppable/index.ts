import {connect} from 'react-redux';
import Droppable from './Droppable';
import {editTemplateOperations} from '../../ducks';
import { IElement } from '../../ducks/interfaces';

const mapDispatchToProps = (dispatch:any) => ({
    moveElement : (element:IElement, targetContainerId:string) => dispatch(editTemplateOperations.moveElement(element, targetContainerId)),
    addNewElement: (element:IElement) => 
        dispatch(editTemplateOperations.addNewElement(element))
})



export default connect(null, mapDispatchToProps)(Droppable);