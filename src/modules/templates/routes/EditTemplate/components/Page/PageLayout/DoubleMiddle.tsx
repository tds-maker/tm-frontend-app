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
const DoubleMiddle = ({ elements, pageNo, setStyle }: IProps) => {
	const topPanel = elements[`bp-${pageNo}-1`]
	const middlePanel = elements[`bpc-${pageNo}-2`]
	const middleLeft = elements[`bp-${pageNo}-2-1`]
	const middleRight = elements[`bp-${pageNo}-2-2`]
	const bottomPanel = elements[`bp-${pageNo}-3`]

	return (
		<React.Fragment>
			<Resizer
				style={topPanel.style}
				unit="percent"
				bottom={true}
				onResized={(target: string, value: string) => {
					setStyle(topPanel, { [target]: value })
				}}>
				Top
			</Resizer>
			<Resizer
				style={middlePanel.style}
				unit="percent"
				bottom={true}
				onResized={(target: string, value: string) => {
					setStyle(middlePanel, { [target]: value })
				}}>
				<Resizer
					style={middleLeft.style}
					unit="percent"
					right={true}
					onResized={(target: string, value: string) => {
						setStyle(middleLeft, { [target]: value })
					}}>
					Middle Left
				</Resizer>
				<div style={middleRight.style}>Middle Right</div>
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
)(DoubleMiddle)
