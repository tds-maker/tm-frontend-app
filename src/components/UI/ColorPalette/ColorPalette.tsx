import * as React from 'react'
import { ColorWheel } from '../../'
import './colorpalette.css'
interface IProps {
	colors: string[]
	customize?: boolean
	title?: string
	onColorSelect?: (colorCode: string) => void
}
interface IState {
	fromChildColors: string[]
}

export default class ColorPalette extends React.PureComponent<IProps, IState> {
	constructor(props: IProps) {
		super(props)
		this.state = {
			fromChildColors: [],
		}
	}
	public myCallback = (dataFromChild: string[]) => {
		this.setState({ fromChildColors: dataFromChild })
	}

	public render() {
		const { colors } = this.props
		const { fromChildColors } = this.state
		const colorMap = [...colors, ...fromChildColors].map((e, i) => (
			<span
				onClick={colorCode => this.onSelectColor(e)}
				key={i}
				style={{ backgroundColor: e }}
			/>
		))

		return (
			<div>
				<ColorWheel onColors={this.myCallback} visible={this.props.customize || false} />
				<div className="colorpicker-palette">
					{this.props.title ? <p>{this.props.title}</p> : null}
					<div className="colors">{colorMap}</div>
				</div>
			</div>
		)
	}
	private onSelectColor = (e: string) => {
		if (this.props.onColorSelect) {
			this.props.onColorSelect(e)
		}
	}
}
