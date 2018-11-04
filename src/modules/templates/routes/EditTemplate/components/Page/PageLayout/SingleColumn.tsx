import * as React from 'react'
import { IElement } from '../../../ducks/interfaces'

interface IProps {
	elements: {
		[key: string]: IElement
	}
	pageNo: number
}
const SingleColumn = ({ elements, pageNo }: IProps) => {
	const panel = elements[`bp-${pageNo}-1`]
	return (
		<React.Fragment>
			<div style={panel.style}>Panel</div>
		</React.Fragment>
	)
}

export default SingleColumn
