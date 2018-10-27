import * as React from 'react'

interface IBodyMarginResizerHandlersProps {
	onMouseDown: (e: any) => void
	hasHeader: boolean
	hasFooter: boolean
}

export interface IBodyResizerOptions {
	onResize: string
	baseModel: string
	direction?: {
		top?: string
		left?: string
		right?: string
		bottom?: string
	}
}

export interface IBodyResizerProps {
	resizeStyle: any
	onMouseDown: (e: any) => void
	isResizing: boolean
	resize: {
		top: number
	}
}

interface IState {
	isResizing: boolean
	resizeTarget: string
	cursor: {
		x: number
		y: number
	}
	changes: {
		top: number
		left: number
		bottom: number
		right: number
	}
}

const BodyMarginResizerHOC = (WrappedComponent: any, options: IBodyResizerOptions) => {
	return class Resizer extends React.Component<any, IState> {
		constructor(props: any) {
			super(props)

			this.state = {
				isResizing: false,
				resizeTarget: '',
				cursor: {
					x: 0,
					y: 0,
				},
				changes: {
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
				},
			}

			this.onMouseDown = this.onMouseDown.bind(this)
			this.onMouseMove = this.onMouseMove.bind(this)
			this.onMouseUp = this.onMouseUp.bind(this)
			this.styleMapper = this.styleMapper.bind(this)
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
			const style = this.styleMapper()

			return (
				<WrappedComponent
					{...this.props}
					resizeStyle={style}
					isResizing={this.state.isResizing}
					resize={this.state.changes}
					onMouseDown={this.onMouseDown}
				/>
			)
		}

		private onMouseDown(e: any) {
			if (!this.state.isResizing) {
				this.setState({
					isResizing: true,
					resizeTarget: e.target.id,
					cursor: { x: e.clientX, y: e.clientY },
				})
			}
		}

		private onMouseMove(e: MouseEvent) {
			if (this.state.isResizing) {
				const { resizeTarget } = this.state
				let differance = 0

				switch (resizeTarget) {
					case 'top':
						differance = e.clientY - this.state.cursor.y
						break
					case 'bottom':
						differance = this.state.cursor.y - e.clientY
						break
					case 'left':
						differance = e.clientX - this.state.cursor.x
						break
					case 'right':
						differance = this.state.cursor.x - e.clientX
						break
				}

				this.setState({
					changes: {
						...this.state.changes,
						[resizeTarget]: differance,
					},
				})
			}
		}

		private onMouseUp(e: MouseEvent) {
			if (this.state.isResizing) {
				if (
					this.props[options.onResize] &&
					typeof this.props[options.onResize] === 'function'
				) {
					this.props[options.onResize](this.styleMapper())
				}
				this.setState({
					isResizing: false,
					resizeTarget: '',
					cursor: { x: 0, y: 0 },
					changes: { top: 0, left: 0, bottom: 0, right: 0 },
				})
			}
		}

		private styleMapper(onlyParent = false) {
			const parentStyle = this.props[options.baseModel].style

			const style = {}
			if (options.direction) {
				Object.keys(options.direction).forEach((key: string) => {
					const value = options.direction![key]
					style[value] =
						onlyParent || !this.state.isResizing
							? parentStyle[value]
							: this.getChanges(value, parentStyle, this.state.changes)
				})
			}
			return style
		}

		private getChanges(key: string, parentStyle: any, changes: any) {
			switch (key) {
				case 'marginTop':
					return `${parentStyle[key].pxToNumber() + this.state.changes.top}px`
				case 'marginRight':
					return `${parentStyle[key].pxToNumber() + this.state.changes.right}px`
				case 'marginBottom':
					return `${parentStyle[key].pxToNumber() + this.state.changes.bottom}px`
				case 'marginLeft':
					return `${parentStyle[key].pxToNumber() + this.state.changes.left}px`
				default:
					return 0
			}
		}
	}
}

export const BodyMarginResizerHandlers = ({
	onMouseDown,
	hasHeader,
	hasFooter,
}: IBodyMarginResizerHandlersProps) => (
	<React.Fragment>
		{!hasHeader ? (
			<div
				id="top"
				onMouseDown={onMouseDown}
				style={{
					position: 'absolute',
					cursor: 'row-resize',
					top: '-1px',
					right: '0',
					left: '0',
					height: '10px',
					borderTop: '1px dashed rgba(0, 0, 0, 0.3)',
				}}
			/>
		) : null}
		{!hasFooter ? (
			<div
				id="bottom"
				onMouseDown={onMouseDown}
				style={{
					position: 'absolute',
					cursor: 'row-resize',
					bottom: '-1px',
					right: '0',
					left: '0',
					height: '10px',
					borderBottom: '1px dashed rgba(0, 0, 0, 0.3)',
				}}
			/>
		) : null}

		<div
			id="left"
			onMouseDown={onMouseDown}
			style={{
				position: 'absolute',
				cursor: 'col-resize',
				top: '0',
				bottom: '0',
				left: '-1px',
				width: '10px',
				borderLeft: '1px dashed rgba(0, 0, 0, 0.3)',
			}}
		/>
		<div
			id="right"
			onMouseDown={onMouseDown}
			style={{
				position: 'absolute',
				cursor: 'col-resize',
				top: '0',
				bottom: '0',
				right: '-1px',
				width: '10px',
				borderRight: '1px dashed rgba(0, 0, 0, 0.3)',
			}}
		/>
	</React.Fragment>
)

export default BodyMarginResizerHOC
