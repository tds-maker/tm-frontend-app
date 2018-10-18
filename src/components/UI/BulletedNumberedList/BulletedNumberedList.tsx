import * as React from 'react'
import './bulletednumberedlist.css'
interface IProps {
	onNumberedList: ((e: React.MouseEvent) => void)
	onBulletedList: ((e: React.MouseEvent) => void)
}

const BulletedNumberedList: React.SFC<IProps> = ({ onNumberedList, onBulletedList }: IProps) => {
	return (
		<React.Fragment>
			<a onClick={onBulletedList} className="toolbar-item">
				<i className="icon-list_bulleted" />
			</a>
			<a onClick={onNumberedList} className="toolbar-item">
				<i className="icon-list_numbered" />
			</a>
		</React.Fragment>
	)
}

export default BulletedNumberedList
