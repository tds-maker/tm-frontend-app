import * as React from 'react'
import './fontstylesbuttons.css'

interface ISelectedProps {
	selectedBold?: boolean
	selectedItalic?: boolean
	selectedUnderline?: boolean
}

interface IProps {
	onBold: (e: React.MouseEvent) => void
	onItalic: (e: React.MouseEvent) => void
	onUnderline: (e: React.MouseEvent) => void
}

const IApp: React.SFC<any> = ({
	selectedBold,
	selectedItalic,
	selectedUnderline,
	onBold,
	onItalic,
	onUnderline,
}: IProps & ISelectedProps) => {
	return (
		<React.Fragment>
			<a className={`toolbar-item ${selectedBold ? 'active' : ''}`} onClick={onBold}>
				<i className="icon-bold" />
			</a>
			<a className={`toolbar-item ${selectedItalic ? 'active' : ''}`} onClick={onItalic}>
				<i className="icon-italic" />
			</a>
			<a
				className={`toolbar-item ${selectedUnderline ? 'active' : ''}`}
				onClick={onUnderline}>
				<i className="icon-underlined" />
			</a>
		</React.Fragment>
	)
}

export default IApp
