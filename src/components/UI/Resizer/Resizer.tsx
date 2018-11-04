import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './resizeBox.style.scss'

interface IProps {
	children: any
	style: React.CSSProperties
	unit: string
	onResized: (target: string, value: string) => void
	right?: boolean
	left?: boolean
	top?: boolean
	bottom?: boolean
}

interface IState {
	isResizing: boolean
	resizeTarget: string
	width?: string
	height?: string
	parentBox?: DOMRect | ClientRect
	elementBox?: DOMRect | ClientRect
}

interface IResizeHandlerProps {
	onMouseDown: (e: any) => void
	direction: string
}
export const ResizeHandler = ({ onMouseDown, direction }: IResizeHandlerProps) => {
	let classDirectionName
	switch (direction) {
		case 'left':
			classDirectionName = 'w'
			break
		case 'right':
			classDirectionName = 'e'
			break
		case 'top':
			classDirectionName = 'n'
			break
		case 'bottom':
			classDirectionName = 's'
			break
	}

	return (
		<div id={direction} className={`handler-${classDirectionName}`} onMouseDown={onMouseDown} />
	)
}

class Resizer extends React.Component<IProps, IState> {
	public static getDerivedStateFromProps(props: IProps, state: IState) {
		if (!state.isResizing) {
			return {
				width: props.style.width ? props.style.width.toString() : undefined,
				height: props.style.height ? props.style.height.toString() : undefined,
			}
		} else {
			return state
		}
	}
	constructor(props: IProps) {
		super(props)
		this.state = {
			isResizing: false,
			resizeTarget: '',
			width: props.style.width ? props.style.width.toString() : undefined,
			height: props.style.height ? props.style.height.toString() : undefined,
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
		const { isResizing, width, height } = this.state
		const { children, style, right, bottom, top } = this.props

		const newStyle = { ...style }
		if (style.height) {
			newStyle.height = isResizing ? height : style.height
		}

		if (style.width) {
			newStyle.width = isResizing ? width : style.width
		}

		return (
			<div className="resize-box" style={newStyle}>
				{children}
				{right ? <ResizeHandler direction="right" onMouseDown={this.onMouseDown} /> : null}
				{bottom ? (
					<ResizeHandler direction="bottom" onMouseDown={this.onMouseDown} />
				) : null}
				{top ? <ResizeHandler direction="top" onMouseDown={this.onMouseDown} /> : null}
			</div>
		)
	}

	private onMouseDown(e: any) {
		if (!this.state.isResizing) {
			const currentEl = ReactDOM.findDOMNode(this)! as Element
			const elementBox = currentEl.getBoundingClientRect()
			const parent = currentEl.parentElement!
			const parentBox = parent.getBoundingClientRect()
			this.setState({
				isResizing: true,
				resizeTarget: e.target.id,
				parentBox,
				elementBox,
			})
		}
	}

	private onMouseMove(e: MouseEvent) {
		const { isResizing, resizeTarget, parentBox, elementBox } = this.state
		const { unit } = this.props
		if (isResizing) {
			let value = 0
			switch (resizeTarget) {
				case 'right':
					this.setState({
						width:
							unit === 'percent'
								? `${((e.clientX - elementBox!.left) / parentBox!.width) * 100}%`
								: '0',
					})
					break
				case 'bottom':
					value = e.clientY - elementBox!.top
					this.setState({
						height:
							unit === 'percent'
								? `${(value / parentBox!.height) * 100}%`
								: `${value}px`,
					})
					break
				case 'top':
					value = elementBox!.bottom - e.clientY
					this.setState({
						height:
							unit === 'percent'
								? `${(value / parentBox!.height) * 100}%`
								: `${value}px`,
					})
					break
			}
		}
	}

	private onMouseUp() {
		if (this.state.isResizing) {
			const { resizeTarget, width, height } = this.state
			const responseTarget =
				resizeTarget === 'right' || resizeTarget === 'left' ? 'width' : 'height'
			const responseValue =
				resizeTarget === 'right' || resizeTarget === 'left' ? width : height
			this.props.onResized(responseTarget, responseValue || '')
			this.setState({
				isResizing: false,
				resizeTarget: '',
				elementBox: undefined,
				parentBox: undefined,
			})
		}
	}
}

export default Resizer
