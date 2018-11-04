import * as React from 'react'
import { pageLayout } from '../../../../../ducks/enums'
import './layoutselect.css'

interface IProps {
	onLayoutChange: (columnId: pageLayout) => void
	selectedLayout?: string
}

const IApp: React.SFC<IProps> = ({ onLayoutChange, selectedLayout }: IProps) => {
	const onSelect = (columnId: pageLayout) => {
		if (onLayoutChange) {
			onLayoutChange(columnId)
		}
	}
	return (
		<div className="layouts">
			<div
				onClick={columnId => onSelect(pageLayout.singleColumn)}
				className={`layout-box ${selectedLayout === pageLayout.singleColumn && 'active'}`}>
				<i className="icon-column1" />1 Column
			</div>
			<div
				onClick={columnId => onSelect(pageLayout.doubleColumn)}
				className={`layout-box ${selectedLayout === pageLayout.doubleColumn && 'active'}`}>
				<i className="icon-column2" />2 Columns
			</div>
			<div
				id="column-3"
				onClick={columnId => onSelect(pageLayout.tripleColumn)}
				className={`layout-box ${selectedLayout === pageLayout.tripleColumn && 'active'}`}>
				<i className="icon-column3" />3 Columns
			</div>
			<div
				id="column-4"
				onClick={columnId => onSelect(pageLayout.singleTopDoubleBottom)}
				className={`layout-box ${selectedLayout === pageLayout.singleTopDoubleBottom &&
					'active'}`}>
				<i className="icon-column_top_single" />
				Columns 1-2
			</div>
			<div
				id="column-5"
				onClick={columnId => onSelect(pageLayout.doubleTopSingleBottom)}
				className={`layout-box ${selectedLayout === pageLayout.doubleTopSingleBottom &&
					'active'}`}>
				<i className="icon-column_bottom-single" />
				Columns 2-1
			</div>
			<div
				id="column-6"
				onClick={columnId => onSelect(pageLayout.singleTopDoubleMiddleSingleBottom)}
				className={`layout-box ${selectedLayout ===
					pageLayout.singleTopDoubleMiddleSingleBottom && 'active'}`}>
				<i className="icon-column_panel" />
				Columns 1-2-1
			</div>
		</div>
	)
}

export default IApp
