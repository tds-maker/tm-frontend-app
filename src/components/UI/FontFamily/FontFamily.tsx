import * as React from 'react'
import { CheckBox, Popover } from '../..'
import './fontfamily.css'
import mockFonts from './mockFonts'

export interface IFonts {
	name: string
	value: string
}
interface IFontFamilyState {
	isChangeAllTexts: boolean
	selectedFont: string
	fonts: IFonts[]
}
interface IProps {
	onFontSelect: (font: IFonts) => void
}
export default class FontFamily extends React.Component<IProps, IFontFamilyState> {
	constructor(props: any) {
		super(props)
		this.state = {
			isChangeAllTexts: false,
			fonts: mockFonts,
			selectedFont: 'Arial',
		}
	}

	public render() {
		return (
			<Popover
				dropdownWrapperClass="font-family"
				dropdownClass="selected"
				popoverTypeClass="font-family-popover"
				popoverTypeId="font_family"
				dropdownText={this.state.selectedFont}>
				<div className="inner custom-scrollbar">
					<ul>
						{this.returnFonts()}
						<li className="change-all">
							<CheckBox
								style="square-style-gray"
								onChange={this.handleChange}
								checked={this.state.isChangeAllTexts}
								label="Change all texts"
							/>
						</li>
					</ul>
				</div>
			</Popover>
		)
	}
	private returnFonts = () => {
		return this.state.fonts.map((e, i) => {
			return (
				<li onClick={this.handleClick.bind(this, e)} key={i}>
					<span style={{ fontFamily: e.value, fontSize: '14px' }}>{e.name}</span>
				</li>
			)
		})
	}
	private handleClick = (font: IFonts) => {
		this.setState({ selectedFont: font.name })
		this.props.onFontSelect(font)
	}
	private handleChange = () => {
		this.setState(prevState => ({
			isChangeAllTexts: !prevState.isChangeAllTexts,
		}))
	}
}
