import * as React from 'react'
import { IElement } from '../../../ducks/interfaces'
import Droppable from '../../Droppable';
import Element from '../../Element';

interface IProps {
	elements: {
		[key: string]: IElement
	}
	pageNo: number
}

const getElements = (element:IElement, allElements:any) => {
	return element.elements.map((elementId:string) => allElements[elementId]);
}

const SingleColumn = ({ elements, pageNo }: IProps) => {
	const panel = elements[`bp-${pageNo}-1`]
	const panelElements = getElements(panel, elements);
	return (
		<React.Fragment>
			<div style={panel.style}>
				<Droppable elementId={panel._id} isSnapped={true}>
					{panelElements.map((element:IElement) => (
						<Element key={element._id} element={element} />
					))}
				</Droppable>
			</div>
		</React.Fragment>
	)
}

export default SingleColumn
