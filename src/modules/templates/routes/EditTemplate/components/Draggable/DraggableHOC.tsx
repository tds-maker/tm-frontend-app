import * as React from 'react'
import * as ReactDOM from 'react-dom'

export interface IDraggable {
	onDragStart: (e: any) => void
	onDrag: (e: any) => void
	onDragEnd: (e: any) => void
}

interface IDraggableOptions {
	effectAllowed: string
}
const defaultOptions: IDraggableOptions = {
	effectAllowed: 'move',
}
const DraggableHOC = (options: IDraggableOptions = defaultOptions) => <T extends object>(
	WrappedComponent: React.ComponentType<T>
) => {
	let _startupBorder: string | null

	const dragStart = (props: any, e: any) => {
		e.dataTransfer.effectAllowed = options.effectAllowed
		const node = ReactDOM.findDOMNode(e.target) as HTMLElement
		const nodeRect = node.getBoundingClientRect()
		e.dataTransfer.setData(
			'json',
			JSON.stringify({
				element: props.element,
				offsetX: e.clientX - nodeRect.left,
				offsetY: e.clientY - nodeRect.top,
				clone: props.clone,
			})
		)

		if (options.effectAllowed === 'move') {
			_startupBorder = node.style.border
			node.style.border = '1px solid #2ea2f8'
		}
	}

	const onDrag = (e: any) => {
		if (options.effectAllowed === 'move') {
			const node = ReactDOM.findDOMNode(e.target) as HTMLElement
			node.style.display = 'none'
		}
	}

	const onDragEnd = (e: any) => {
		const node = ReactDOM.findDOMNode(e.target) as HTMLElement
		if (options.effectAllowed === 'move') {
			node.style.border = _startupBorder
			node.style.display = 'block'
		}
	}

	// Return component
	return (props: any) => (
		<div>
			<WrappedComponent
				onDragStart={dragStart.bind({}, props)}
				onDrag={onDrag}
				onDragEnd={onDragEnd}
				{...props}
			/>
		</div>
	)
}

export default DraggableHOC
