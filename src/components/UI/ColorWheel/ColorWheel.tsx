import * as iro from '@jaames/iro'
import * as React from 'react'
import './colorwheel.css'
export interface IProps {
	visible: boolean
	onColors: ((colorFromChild: string[]) => void)
}

export interface IState {
	isColorPickerShow: boolean
	colors: string[]
	currentColor: string
}

export default class ColorWheel extends React.PureComponent<IProps, IState> {
	public static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
		if (nextProps.onColors) {
			nextProps.onColors(prevState.colors)
		}
		return {}
	}
	private node: any
	private colorpicker: any

	constructor(props: IProps) {
		super(props)
		this.state = {
			isColorPickerShow: false,
			colors: [],
			currentColor: '',
		}
	}

	public componentDidMount() {
		if (this.props.visible) {
			this.colorpicker = new iro.ColorPicker('.inner', {
				width: 200,
				height: 240,
				sliderHeight: 17,
			})

			this.colorpicker.on('color:change', (color: iro.Color) => {
				this.setState({ currentColor: color.hexString })
			})
		}
	}
	public render() {
		if (this.props.visible) {
			return (
				<div className="colorpicker-display-box">
					<div className="new-colors">
						<div onClick={this.onColorPickerShow} className="add-color" />
					</div>
					<div
						ref={node => {
							this.node = node
						}}
						className={`colorpicker ${this.state.isColorPickerShow ? 'show' : ''}`}>
						<div className="inner" />
						<div className="color-code">
							Color code
							<span id="color">{this.state.currentColor}</span>
						</div>
						<input onClick={this.onSaveColor} type="button" value="Apply" />
					</div>
				</div>
			)
		} else {
			return null
		}
	}
	private onSaveColor = () => {
		document.removeEventListener('click', this.handleOutsideClick, false)
		const newColors = [...this.state.colors, this.state.currentColor]
		this.setState(prevState => ({
			isColorPickerShow: !prevState.isColorPickerShow,
			colors: newColors,
		}))
	}

	private handleOutsideClick = (e: MouseEvent) => {
		if (this.node.contains(e.target)) {
			return
		}
		this.onColorPickerShow()
	}

	private onColorPickerShow = () => {
		if (this.props.visible) {
			if (!this.state.isColorPickerShow) {
				document.addEventListener('click', this.handleOutsideClick, false)
			} else {
				document.removeEventListener('click', this.handleOutsideClick, false)
			}
			this.setState(prevState => ({
				isColorPickerShow: !prevState.isColorPickerShow,
			}))
		}
	}
}
