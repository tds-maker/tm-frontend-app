import * as React from 'react'
import TextGroup from './groups/TextGroup'
import HeaderGroup from './groups/HeaderGroup'
import './toolbar.style.scss'
import { IElement } from '../../ducks/interfaces';
import { metaType } from '../../ducks/enums';
import { CSSProperties } from 'react';

interface IProps {
	activeToolbar: string;
	element: IElement;
	setElementStyle : (element:IElement, style: CSSProperties) => void;
}

class Toolbar extends React.PureComponent<IProps> {
	constructor(props:IProps){
		super(props);
		this.renderGroup = this.renderGroup.bind(this);
	}
	public render() {
		return (
			<div className="toolbar clearfix">
				<div className="toolbar-left clearfix">
					{this.renderGroup()}
				</div>
				<div className="toolbar-right">
					<div className="group">
						<div className="dropdown toolbar-item translate">
							<span className="selected">Translate</span>
							<span className="arrow" />
						</div>
					</div>
					<div className="group" />
				</div>
			</div>
		)
	}

	private renderGroup() {
		const {element, setElementStyle} = this.props;
		if(!element){
			return <TextGroup />
		}
		switch (element._meta.typeName) {
			case metaType.text:
				return <TextGroup element={element} setElementStyle={setElementStyle}/>
			case metaType.header:
				return <HeaderGroup />
			default:
				return null;
		}
	}
}

export default Toolbar
