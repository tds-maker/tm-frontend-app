import * as React from 'react'
import './header-footer-resizer.style.scss'
interface IProps {
	children: any
	size: {
		height: number
	}
	onResized: (newHeight: number) => void
	directions: string[]
}

interface IState {
	isResizing: boolean
	height: number
	handler: string
}

class HeaderFooterResizer extends React.PureComponent<IProps, IState> {
	private startYPosition: number
	constructor(props: IProps) {
		super(props)

		this.state = {
			isResizing: false,
			height: props.size.height,
			handler: '',
		}

		this.onMouseDown = this.onMouseDown.bind(this)
		this.onMouseMove = this.onMouseMove.bind(this)
		this.onMouseUp = this.onMouseUp.bind(this)
	}

	public componentDidMount() {
		document.addEventListener('mousemove', this.onMouseMove)
		document.addEventListener('mouseup', this.onMouseUp)
	}

	public componentWillUnmount() {
		document.removeEventListener('mousemove', this.onMouseMove)
		document.removeEventListener('mouseup', this.onMouseUp)
	}

	public render() {
		const styleHeight = `${
			this.state.isResizing ? this.state.height : this.props.size.height
		}px`
		return (
			<div className="header-footer-resizer" style={{ height: styleHeight }}>
				{this.props.children}

				{this.props.directions.includes('s') ? (
					<div
						id="bottom"
						className="header-footer-resizer__bottom-line"
						onMouseDown={this.onMouseDown}
					/>
				) : null}
				{this.props.directions.includes('n') ? (
					<div
						id="top"
						className="header-footer-resizer__top-line"
						onMouseDown={this.onMouseDown}
					/>
				) : null}
			</div>
		)
	}

	private onMouseDown(e: any) {
		if (!this.state.isResizing) {
			this.startYPosition = e.clientY
			this.setState({
				isResizing: true,
				height: this.props.size.height,
				handler: e.target.id,
			})
		}
	}

	private onMouseMove(e: MouseEvent) {
		if (this.state.isResizing) {
			const difference = this.startYPosition - e.clientY
			let newHeight = 0
			switch (this.state.handler) {
				case 'bottom':
					newHeight = this.props.size.height - difference
					break
				case 'top':
					newHeight = this.props.size.height + difference
					break
			}

			if (newHeight >= 3) {
				this.setState({
					height: newHeight,
				})
			}
		}
	}

	private onMouseUp() {
		if (this.state.isResizing && this.state.height !== this.props.size.height) {
			this.setState({ isResizing: false })
			this.props.onResized(this.state.height)
		}
	}
}

export default HeaderFooterResizer
