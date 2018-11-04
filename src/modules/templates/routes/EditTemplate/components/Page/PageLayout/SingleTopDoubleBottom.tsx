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
const SingleTopDoubleBottom = ({ elements, pageNo, setStyle }: IProps) => {
	const topPanel = elements[`bp-${pageNo}-1`]
	const bottomContainerPanel = elements[`bpc-${pageNo}-2`]
	const bottomPanelLeft = elements[`bp-${pageNo}-2-1`]
	const bottomPanelRight = elements[`bp-${pageNo}-2-2`]

	return (
		<React.Fragment>
			<Resizer
				style={topPanel.style}
				unit="percent"
				bottom={true}
				onResized={(target: string, value: string) => {
					setStyle(topPanel, { [target]: value })
				}}>
				Top Panel
			</Resizer>
			<div style={bottomContainerPanel.style}>
				<Resizer
					style={bottomPanelLeft.style}
					unit="percent"
					right={true}
					onResized={(target: string, value: string) => {
						setStyle(bottomPanelLeft, { [target]: value })
					}}>
					Bottom Left
				</Resizer>
				<div style={bottomPanelRight.style}>Bottom Right</div>
			</div>
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
)(SingleTopDoubleBottom)
