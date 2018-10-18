import * as React from 'react'
import { Popover } from '../../'
import './alignbuttons.css'
interface IProps {
	selectedAlign?: string | null
	onAlignChange: (selectedAlign: string) => void
}

const AlingButtons: React.SFC<IProps> = ({ selectedAlign, onAlignChange }: IProps) => {
	const onSelect = (position: string) => {
		if (onAlignChange) {
			onAlignChange(position)
		}
	}
	return (
		<Popover
			popoverTypeClass="align-popover"
			popoverTypeId="align_popover"
			dropdownIcon="icon-align_left">
			{['left', 'right', 'center', 'justify'].map(direction => {
				return (
					<span
						key={`id-${direction}`}
						style={selectedAlign === direction ? { backgroundColor: '#e8f5fe' } : {}}
						onClick={() => onSelect(direction)}>
						<i className={`icon-align_${direction}`} />
					</span>
				)
			})}
		</Popover>
	)
}

export default AlingButtons
