import * as React from 'react'
import { Popover } from '../../'
import './blankalternatingtable.css'
interface IProps {
	onBlankTable: (e: React.MouseEvent) => void
	onAlternatingTable: (e: React.MouseEvent) => void
}

const BlankAlternatingTable: React.SFC<IProps> = ({ onBlankTable, onAlternatingTable }) => {
	return (
		<Popover
			popoverTypeClass="table-popover"
			popoverTypeId="table_popover"
			dropdownClass="text-yellow"
			dropdownIcon="icon-grid_on">
			<div onClick={onBlankTable} className="tablecol">
				<table>
					<tbody>
						<tr>
							<td />
							<td />
							<td />
							<td />
						</tr>
						<tr>
							<td />
							<td />
							<td />
							<td />
						</tr>
						<tr>
							<td />
							<td />
							<td />
							<td />
						</tr>
						<tr>
							<td />
							<td />
							<td />
							<td />
						</tr>
					</tbody>
				</table>
				Blank table
			</div>
			<div onClick={onAlternatingTable} className="tablecol">
				<table className="colored">
					<tbody>
						<tr>
							<td />
							<td />
							<td />
							<td />
						</tr>
						<tr>
							<td />
							<td />
							<td />
							<td />
						</tr>
						<tr>
							<td />
							<td />
							<td />
							<td />
						</tr>
						<tr>
							<td />
							<td />
							<td />
							<td />
						</tr>
					</tbody>
				</table>
				Alternating color
			</div>
		</Popover>
	)
}

export default BlankAlternatingTable
