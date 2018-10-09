import * as React from 'react'
import { Popover } from '../../'
import './shapebuttons.css'
interface IProps {
	onCircle: (e: React.MouseEvent) => void
	onSquare: (e: React.MouseEvent) => void
	onTriangle: (e: React.MouseEvent) => void
	onSquareRd: (e: React.MouseEvent) => void
}

const ShapeButtons: React.SFC<IProps> = ({
	onCircle,
	onSquare,
	onSquareRd,
	onTriangle,
}: IProps) => {
	return (
		<Popover
			popoverTypeClass="shape-popover"
			popoverTypeId="shape_popover"
			dropdownIcon="icon-shape">
			<span onClick={onSquare}>
				<i className="icon-square" />
			</span>
			<span onClick={onCircle}>
				<i className="icon-circle" />
			</span>
			<span onClick={onTriangle}>
				<i className="icon-triangle" />
			</span>
			<span onClick={onSquareRd}>
				<i className="icon-square_rd" />
			</span>
		</Popover>
	)
}

export default ShapeButtons
