import * as React from 'react'
import { IElement } from '../../../ducks/interfaces'
import { Resizer } from '../../../../../../../components'

interface IProps {
	footer: IElement
	changeStyle: (element: IElement, style: object) => {}
}

class PageFooter extends React.Component<IProps> {
	constructor(props: IProps) {
		super(props)
		this.onFooterHeightChange = this.onFooterHeightChange.bind(this)
	}

	public render() {
		const { footer } = this.props

		if (footer) {
			return (
				<Resizer
					top={true}
					unit="px"
					style={footer.style}
					onResized={this.onFooterHeightChange}>
					Header
				</Resizer>
			)
		} else {
			return null
		}
	}

	private onFooterHeightChange(target: string, value: string) {
		this.props.changeStyle(this.props.footer, { [target]: value })
	}
}

export default PageFooter
