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
const DoubleColumn = ({ elements, pageNo, setStyle }: IProps) => {
	const leftPanel = elements[`bp-${pageNo}-1`]
	const rightPanel = elements[`bp-${pageNo}-2`]

	return (
		<React.Fragment>
			<Resizer
				style={leftPanel.style}
				unit="percent"
				right={true}
				onResized={(target: string, value: string) => {
					setStyle(leftPanel, { [target]: value })
				}}>
				Left panel
			</Resizer>
			<div style={rightPanel.style}>Right</div>
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
)(DoubleColumn)
