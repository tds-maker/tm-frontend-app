import * as React from 'react'
import { FontFamily, FontSize, UndoRedoButton } from '../../../../../../../components'
import { IElement } from '../../../ducks/interfaces';
import { IFonts } from '../../../../../../../components/UI/FontFamily/FontFamily';

interface IProps{
	element?: IElement;
	setElementStyle? : (element:IElement, style: React.CSSProperties) => void;
}

class TextGroup extends React.PureComponent<IProps> {
	constructor(props:IProps){
		super(props);
		this.onFontFamilyChange = this.onFontFamilyChange.bind(this);
		this.onFontSizeChange = this.onFontSizeChange.bind(this);
	}
	public render(){
		return (
			<div>
				<div className="group">
					<UndoRedoButton />
				</div>
				<div className="group">
					<FontFamily onFontSelect={this.onFontFamilyChange} />
					<FontSize onChange={this.onFontSizeChange} />
				</div>
				{/* <div className="group">
					<FontStyleButtons/>
				</div> */}
			</div>
		)
	}

	private onFontFamilyChange(font:IFonts){
		if(this.props.element && this.props.setElementStyle){
			this.props.setElementStyle(this.props.element, {
				fontFamily: font.value
			})
		}
	}

	private onFontSizeChange(value:number){
		if(this.props.element && this.props.setElementStyle){
			this.props.setElementStyle(this.props.element, {
				fontSize: `${value}px`
			})
		}
	}
}

export default TextGroup
