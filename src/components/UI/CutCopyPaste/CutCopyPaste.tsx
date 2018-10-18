import * as React from 'react'
import './cutcopypaste.css'
interface ICutCopyPasteProps {
	onCut: ((e: any) => void)
	onCopy: ((e: any) => void)
	onPaste: ((e: any) => void)
}

const ICutCopyPaste: React.SFC<ICutCopyPasteProps> = ({
	onCut,
	onCopy,
	onPaste,
}: ICutCopyPasteProps) => {
	return (
		<div className="group">
			<a onClick={onCut} className="toolbar-item">
				<i className="icon-content_cut" />
			</a>
			<a onClick={onCopy} className="toolbar-item">
				<i className="icon-content_copy" />
			</a>
			<a onClick={onPaste} className="toolbar-item">
				<i className="icon-content_paste" />
			</a>
		</div>
	)
}

export default ICutCopyPaste
