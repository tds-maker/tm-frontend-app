import * as React from 'react'
import './pagenavigator.css'

interface IProps {
	onClick?: ((e: any) => void)
	onUp?: ((e: any) => void)
	onDown?: ((e: any) => void)
	currentPage: number
	totalPage: number
}

const PageNavigator: React.SFC<IProps> = ({
	onClick,
	currentPage,
	totalPage,
	onUp,
	onDown,
}: IProps) => {
	return (
		<div className="page-navigator">
			<span onClick={onUp} className="plus" />
			<span className="number">{currentPage}</span>
			<span onClick={onDown} className="minus" />
		</div>
	)
}
export default PageNavigator
