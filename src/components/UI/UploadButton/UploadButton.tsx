import * as React from 'react'
import './uploadbutton.css'
interface IUploadButtonProps {
	onButtonClick: (e: React.MouseEvent) => void
}

const UploadButton: React.SFC<IUploadButtonProps> = ({ onButtonClick }: IUploadButtonProps) => (
	<a onClick={onButtonClick} className="toolbar-item">
		<i className="icon-file_upload" />
	</a>
)

export default UploadButton
