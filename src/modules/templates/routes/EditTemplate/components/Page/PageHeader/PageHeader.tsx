import * as React from 'react'
import { IElement } from '../../../ducks/interfaces'
import { Resizer } from '../../../../../../../components'

interface IProps {
	header: IElement
	changeStyle: (element: IElement, style: object) => void
}

class PageHeader extends React.Component<IProps> {
	constructor(props: IProps) {
		super(props)
		this.onHeaderHeightChange = this.onHeaderHeightChange.bind(this)
	}

	public render() {
		const { header } = this.props
		if (header) {
			return (
				<Resizer
					bottom={true}
					unit="px"
					style={header.style}
					onResized={this.onHeaderHeightChange}>
					Header
				</Resizer>
			)
		} else {
			return null
		}
	}

	private onHeaderHeightChange(target: string, value: string) {
		this.props.changeStyle(this.props.header, { [target]: value })
	}
}

export default PageHeader
