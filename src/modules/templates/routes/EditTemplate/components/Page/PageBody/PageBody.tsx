import * as React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import { ResizeHandler } from '../../../../../../../components/UI/Resizer/Resizer'
import { IElement } from '../../../ducks/interfaces'
import * as ReactDOM from 'react-dom'

interface IProps {
	body: any
	hasHeader: boolean
	hasFooter: boolean
	elements: {
		[key: string]: IElement
	}
	layout: string
	pageNo: number
	setMargins: (style: React.CSSProperties) => void
}

interface IState {
	isResizing: boolean
	resizeTarget?: string
	elementBox?: DOMRect | ClientRect
	parentBox?: DOMRect | ClientRect
	style: React.CSSProperties
}

class PageBody extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props)
		this.state = {
			isResizing: false,
			style: {},
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
		const { hasHeader, hasFooter, body, elements, layout, pageNo } = this.props
		const { isResizing, style } = this.state
		const bodyStyle = body.style

		const newStyle = isResizing ? { ...bodyStyle, ...style } : bodyStyle

		return (
			<div style={newStyle}>
				<PageLayout pageNo={pageNo} layout={layout} elements={elements} />
				{!hasHeader ? (
					<ResizeHandler direction="top" onMouseDown={this.onMouseDown} />
				) : null}
				{!hasFooter ? (
					<ResizeHandler direction="bottom" onMouseDown={this.onMouseDown} />
				) : null}
				<ResizeHandler direction="left" onMouseDown={this.onMouseDown} />
				<ResizeHandler direction="right" onMouseDown={this.onMouseDown} />
			</div>
		)
	}

	private onMouseDown(e: any) {
		if (!this.state.isResizing) {
			const currentEl = ReactDOM.findDOMNode(this)! as Element
			const parent = currentEl.parentElement!
			this.setState({
				isResizing: true,
				resizeTarget: e.target.id,
				elementBox: currentEl.getBoundingClientRect(),
				parentBox: parent.getBoundingClientRect(),
			})
		}
	}

	private onMouseMove(e: MouseEvent) {
		if (this.state.isResizing) {
			let differance
			let isInLimit = false
			let marginKey = ''
			switch (this.state.resizeTarget) {
				case 'left':
					differance = e.clientX - this.state.parentBox!.left
					isInLimit = !(
						e.clientX <= this.state.parentBox!.left ||
						e.clientX >= this.state.elementBox!.right - 10
					)
					marginKey = 'marginLeft'
					break
				case 'right':
					differance = this.state.parentBox!.right - e.clientX
					isInLimit = !(
						e.clientX >= this.state.parentBox!.right ||
						e.clientX <= this.state.elementBox!.left + 10
					)
					marginKey = 'marginRight'
					break
				case 'top':
					differance = e.clientY - this.state.parentBox!.top
					isInLimit = !(
						e.clientY <= this.state.parentBox!.top ||
						e.clientY >= this.state.elementBox!.bottom - 10
					)
					marginKey = 'marginTop'
					break
				case 'bottom':
					differance = this.state.parentBox!.bottom - e.clientY
					isInLimit = !(
						e.clientY >= this.state.parentBox!.bottom ||
						e.clientY <= this.state.elementBox!.top - 10
					)
					marginKey = 'marginBottom'
					break
				default:
					return
			}

			if (isInLimit) {
				this.setState({
					style: {
						[marginKey]: `${differance}px`,
					},
				})
			}
		}
	}

	private onMouseUp(e: MouseEvent) {
		if (this.state.isResizing) {
			this.props.setMargins(this.state.style)
			this.setState({
				isResizing: false,
				resizeTarget: undefined,
				style: {},
			})
		}
	}
}

export default PageBody
