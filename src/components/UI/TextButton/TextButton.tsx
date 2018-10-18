import * as React from 'react'
import './textbutton.css'
interface IProps {
	onTextButton: (e: React.MouseEvent) => void
}

const TextButton: React.SFC<IProps> = ({ onTextButton }) => {
	return (
		<a onClick={onTextButton} className="toolbar-item text-blue">
			<i className="icon-text_fields" />
		</a>
	)
}

export default TextButton
