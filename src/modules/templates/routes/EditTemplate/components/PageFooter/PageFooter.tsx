import * as React from 'react';
import { IFooter } from '../../ducks/interfaces';
import Resizer from '../Resizers/HeaderFooterResizer';


interface IProps {
    footer: IFooter,
    changeStyle: (style:object) => {};
}


class PageFooter extends React.Component<IProps> {
    constructor(props:IProps){
        super(props);
        this.onFooterHeightChange = this.onFooterHeightChange.bind(this);
    }
 

    public render(){
        const {footer} = this.props;

        if(footer){
            const height = parseInt(footer.style.height.replace('px', ''), 10);
            return (<Resizer directions={['n']} size={{ height }} onResized={this.onFooterHeightChange}>
                <div id="page-footer" style={footer.style}> Footer
                </div>
            </Resizer>);
        }else {
            return null;
        }

        
    }

    private onFooterHeightChange(newHeight:number){
        const footerStyle = {
            ...this.props.footer.style,
            height: `${newHeight}px`
        }

        this.props.changeStyle(footerStyle);
    }
}

export default PageFooter;