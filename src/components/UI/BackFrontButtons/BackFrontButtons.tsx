import * as React from 'react'
import './backfrontbuttons.css'
interface IProps {
	onBackButton: (e: React.MouseEvent) => void
	onFrontButton: (e: React.MouseEvent) => void
}

const BackFrontButton: React.SFC<IProps> = ({ onBackButton, onFrontButton }: IProps) => {
	return (
		<React.Fragment>
			<a onClick={onBackButton} className="toolbar-item">
				<i className="icon-flip_to_back" />
			</a>
			<a onClick={onFrontButton} className="toolbar-item">
				<i className="icon-flip_to_front" />
			</a>
		</React.Fragment>
	)
}

export default BackFrontButton
