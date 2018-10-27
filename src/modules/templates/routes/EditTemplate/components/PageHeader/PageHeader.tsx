import * as React from 'react'
import { IHeader } from '../../ducks/interfaces'
import Resizer from '../Resizers/HeaderFooterResizer'
import classNames from 'classnames'

interface IProps {
	header: IHeader
	changeStyle: (style: object) => void
	selectHeader: (el: any, options: any) => void
	seletedElement: any
}

class PageHeader extends React.Component<IProps> {
	constructor(props: IProps) {
		super(props)
		this.onHeaderHeightChange = this.onHeaderHeightChange.bind(this)
	}

	public render() {
		const { header, seletedElement } = this.props

		const className = classNames({
			'selected-element': seletedElement && seletedElement.options.type === 'header',
		})
		if (header) {
			const height = parseInt(header.style.height.replace('px', ''), 10)
			return (
				<Resizer directions={['s']} size={{ height }} onResized={this.onHeaderHeightChange}>
					<div
						id="page-header"
						style={header.style}
						onClick={this.props.selectHeader.bind(this, header, {
							type: 'header',
						})}
						className={className}>
						{' '}
						Header
					</div>
				</Resizer>
			)
		} else {
			return null
		}
	}

	private onHeaderHeightChange(newHeight: number) {
		const headerStyle = {
			...this.props.header.style,
			height: `${newHeight}px`,
		}

		this.props.changeStyle(headerStyle)
	}
}

export default PageHeader
