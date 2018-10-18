import * as React from 'react'
import './imagebutton.css'
interface IImageButtonProps {
	onButtonClick: (e: React.MouseEvent) => void
}
const ImageButton: React.SFC<IImageButtonProps> = ({ onButtonClick }: IImageButtonProps) => (
	<a onClick={onButtonClick} className="toolbar-item text-red">
		<i className="icon-image" />
	</a>
)
export default ImageButton
