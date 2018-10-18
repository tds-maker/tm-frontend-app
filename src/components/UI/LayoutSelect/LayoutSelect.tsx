import * as React from 'react'
import './layoutselect.css'

interface IProps {
	onLayoutChange: (columnId: string) => void
	selectedLayout?: string
}

const IApp: React.SFC<IProps> = ({ onLayoutChange, selectedLayout }: IProps) => {
	const onSelect = (columnId: string) => {
		if (onLayoutChange) {
			onLayoutChange(columnId)
		}
	}
	return (
		<div className="layouts">
			<div
				onClick={columnId => onSelect('column-1')}
				className={`layout-box ${selectedLayout === 'column-1' && 'active'}`}>
				<i className="icon-column1" />1 Column
			</div>
			<div
				onClick={columnId => onSelect('column-2')}
				className={`layout-box ${selectedLayout === 'column-2' && 'active'}`}>
				<i className="icon-column2" />2 Columns
			</div>
			<div
				id="column-3"
				onClick={columnId => onSelect('column-3')}
				className={`layout-box ${selectedLayout === 'column-3' && 'active'}`}>
				<i className="icon-column3" />3 Columns
			</div>
			<div
				id="column-4"
				onClick={columnId => onSelect('column-4')}
				className={`layout-box ${selectedLayout === 'column-4' && 'active'}`}>
				<i className="icon-column_top_single" />
				Columns 1-2
			</div>
			<div
				id="column-5"
				onClick={columnId => onSelect('column-5')}
				className={`layout-box ${selectedLayout === 'column-5' && 'active'}`}>
				<i className="icon-column_bottom-single" />
				Columns 2-1
			</div>
			<div
				id="column-6"
				onClick={columnId => onSelect('column-6')}
				className={`layout-box ${selectedLayout === 'column-6' && 'active'}`}>
				<i className="icon-column_panel" />
				Columns 1-2-1
			</div>
		</div>
	)
}

export default IApp
