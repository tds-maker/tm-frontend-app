import * as React from 'react';
import classNames from 'classnames'
import { IElement } from '../../ducks/interfaces';
import DraggableHOC,{IDraggable} from '../Draggable/DraggableHOC';


interface IProps {
    element: IElement;
    select: (id:string) => void;
    isSelected:boolean;
    onValueChanged: (element: IElement, value:any) => void;
}


class TextElement extends React.Component<IProps & IDraggable>{
    
    constructor(props:IProps & IDraggable){
        super(props);

        this.onClick= this.onClick.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    public render(){
        const { element, onDragStart, onDrag, onDragEnd, isSelected} = this.props;
        const className = classNames({
            "selected-element" : isSelected
        })
        return <div 
            className={className}
            suppressContentEditableWarning={true}
            contentEditable={isSelected}
            onDragStart={onDragStart}
            onDrag={onDrag}
            onDragEnd={onDragEnd}
            draggable={!isSelected}
            id={element._id}
            style={element.style} 
            onClick={this.onClick}
            onBlur={this.onBlur}
            dangerouslySetInnerHTML={{__html : element.value}}
            />
    }

    private onClick(e:any){
        e.stopPropagation();
        if(!this.props.isSelected){
            this.props.select(this.props.element._id);
        }
    }

    private onBlur(e:any){
        const node = e.target as HTMLElement;
        const newValue = node.innerHTML;
        const {element, onValueChanged} = this.props;
        if(newValue !== element.value){
            onValueChanged(element, node.innerHTML);
        }
    }
}


export default DraggableHOC()(TextElement);