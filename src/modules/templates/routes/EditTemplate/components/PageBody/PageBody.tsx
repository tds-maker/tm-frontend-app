import * as React from 'react';
import BodyMarginResizer, {BodyMarginResizerHandlers, IBodyResizerProps} from '../Resizers/BodyMarginResizer';

interface IProps {
    body: any;
    hasHeader: boolean;
    hasFooter: boolean;
}

class PageBody extends React.Component<IProps & IBodyResizerProps> {
    public render(){
        const {hasHeader, hasFooter, body} = this.props;
        const { style } = body;
        const newStyle = {...style, ...this.props.resizeStyle };
        return (
            <div style={newStyle}>
                Body
                <BodyMarginResizerHandlers hasHeader={hasHeader} hasFooter={hasFooter} onMouseDown={this.props.onMouseDown} />
            </div>
        )
    }
}

export default BodyMarginResizer(PageBody, {
    onResize: 'onResize',
    baseModel: 'body',
    direction : {
        top: 'marginTop',
        right: 'marginRight',
        bottom: 'marginBottom',
        left: 'marginLeft'
    }
});