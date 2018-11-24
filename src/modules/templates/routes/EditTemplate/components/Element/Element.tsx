import * as React from 'react'
import TextElement from './TextElement'
import { IElement } from '../../ducks/interfaces'
import { metaType } from '../../ducks/enums'

interface IProps {
	element: IElement
	select: (id: string) => void
	selectedElement: IElement | undefined
	onValueChanged: (element: IElement, value: any) => void
}

class Element extends React.Component<IProps> {
	public render() {
		const { element, selectedElement, select, onValueChanged } = this.props
		switch (element._meta.typeName) {
			case metaType.text:
				return (
					<TextElement
						element={element}
						select={select}
						onValueChanged={onValueChanged}
						isSelected={selectedElement && selectedElement._id === element._id}
					/>
				)
			default:
				return null
		}
	}
}

export default Element
