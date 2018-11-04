import * as React from 'react'
import { connect } from 'react-redux'
import { IElement } from '../../../ducks/interfaces'
import { Resizer } from '../../../../../../../components'
import { editTemplateOperations } from '../../../ducks'

interface IProps {
	elements: {
		[key: string]: IElement
	}
	pageNo: number
	setStyle: (element: IElement, style: React.CSSProperties) => void
}
const DoubleTopSingleBottom = ({ elements, pageNo, setStyle }: IProps) => {
	const topPanelContainer = elements[`bpc-${pageNo}-1`]
	const topLeft = elements[`bp-${pageNo}-1-1`]
	const topRight = elements[`bp-${pageNo}-1-2`]
	const bottomPanel = elements[`bp-${pageNo}-2`]

	return (
		<React.Fragment>
			<Resizer
				style={topPanelContainer.style}
				unit="percent"
				bottom={true}
				onResized={(target: string, value: string) => {
					setStyle(topPanelContainer, { [target]: value })
				}}>
				<Resizer
					style={topLeft.style}
					unit="percent"
					right={true}
					onResized={(target: string, value: string) => {
						setStyle(topLeft, { [target]: value })
					}}>
					Top Left
				</Resizer>
				<div style={topRight.style}>Top Right</div>
			</Resizer>
			<div style={bottomPanel.style}>Bottom Panel</div>
		</React.Fragment>
	)
}

const mapDispatchToProps = (dispatch: any) => ({
	setStyle: (element: IElement, style: React.CSSProperties) =>
		dispatch(editTemplateOperations.setElementStyle(element, style)),
})

export default connect(
	null,
	mapDispatchToProps
)(DoubleTopSingleBottom)
