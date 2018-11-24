import * as React from 'react';
import './droppable.style.scss';
import classnames from 'classnames';
import { moveState } from '../../ducks/enums';
import * as ReactDOM from 'react-dom';
import { IElement } from '../../ducks/interfaces';

interface IProps {
    children:any;
    elementId: string;
    isSnapped: boolean;
    addNewElement: (element:IElement) => void;
    moveElement: (element:IElement, targetContainerId:string) => void;
}
interface IState {
    isDropping:boolean;
}
class Droppable extends React.Component<IProps, IState>{
    constructor(props:IProps){
        super(props);

        this.state = { isDropping : false };
        this.onDragOver = this.onDragOver.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    public render(){
        const className = classnames({
            'drop-area': true,
            'active' : this.state.isDropping
        })
        return <div 
            className={className}
            onDragOver={this.onDragOver}
            onDragLeave={this.onDragLeave}
            onDragEnd= {this.onDragEnd}
            onDrop={this.onDrop}
        >{this.props.children}</div>
    }

    private onDrop(e:any){
        e.preventDefault();
        const transferData = e.dataTransfer.getData("json");
        if(!transferData){
            return;
        }
        const data = JSON.parse(transferData) as any;
        const element = data.element as IElement;
        const offsetX = data.offsetX;
        const offsetY = data.offsetY;
        
        if(this.props.isSnapped){
            element.style.position = 'relative';
            element.style.width = "100%";
            element.style.height = "auto";
            element.style.top = "0";
            element.style.left = "0";
        }else{
            const currentDomEl = ReactDOM.findDOMNode(this)! as Element
            const domElRect = currentDomEl.getBoundingClientRect();
            let xPos = e.clientX;
            let yPos = e.clientY;

            element.style.position = 'absolute';
            element.style.width = "150px";
            if(e.dataTransfer.effectAllowed === "move"){
                xPos -= offsetX;
                yPos -= offsetY;

                const domElement = document.getElementById(element._id) as HTMLDivElement;
                domElement.style.display = element.style.display || null;
            }
            
        
            element.style.top = `${yPos - domElRect.top}px`;
            element.style.left = `${xPos - domElRect.left}px`;
            element._meta.moveState = moveState.canMove;
        }
        if(element._id === "new"){
            element._meta.containerId = this.props.elementId;
            element._id = `${element._meta.typeName}-${Date.now()}`;
            this.props.addNewElement(element)
        }else{
            this.props.moveElement(element, this.props.elementId);
        }
        if(this.state.isDropping){
            this.setState({ isDropping : false})
        }
    }

    private onDragOver(e:any){
        e.preventDefault();
        if(!this.state.isDropping){
            this.setState({ isDropping : true})
        }
    }

    private onDragLeave(e:any){
        e.preventDefault();
        if(this.state.isDropping){
            this.setState({ isDropping : false})
        }
    }

    private onDragEnd(e:any){
        e.preventDefault();
        if(this.state.isDropping){
            this.setState({ isDropping : false})
        }
    }
}

export default Droppable;