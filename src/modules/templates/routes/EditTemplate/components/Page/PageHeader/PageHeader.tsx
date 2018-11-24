import * as React from 'react'
import { IElement } from '../../../ducks/interfaces'
import { Resizer } from '../../../../../../../components'
import Droppable from '../../Droppable'
import Element from '../../Element'

interface IProps {
	header: IElement
	elements: IElement[]
	changeStyle: (element: IElement, style: object) => void
}

class PageHeader extends React.Component<IProps> {
	constructor(props: IProps) {
		super(props)
		this.onHeaderHeightChange = this.onHeaderHeightChange.bind(this)
	}

	public render() {
		const { header, elements } = this.props
		if (header) {
			return (
				<Resizer
					bottom={true}
					unit="px"
					style={header.style}
					onResized={this.onHeaderHeightChange}>
					<Droppable elementId={header._id} isSnapped={false}>
						{elements.length > 0 ? (
							this.renderElements(elements)
						) : (
							<div className="help-box">
								<h4>HEADER</h4>
								<p>Click and start to customize the header</p>
								<p>Tip: Colorful draws your audience attention!</p>
							</div>
						)}
					</Droppable>
				</Resizer>
			)
		} else {
			return null
		}
	}

	private renderElements(elements: IElement[]) {
		return (
			<React.Fragment>
				{elements.map((element: IElement) => (
					<Element key={element._id} element={element} />
				))}
			</React.Fragment>
		)
	}

	private onHeaderHeightChange(target: string, value: string) {
		this.props.changeStyle(this.props.header, { [target]: value })
	}
}

export default PageHeader
