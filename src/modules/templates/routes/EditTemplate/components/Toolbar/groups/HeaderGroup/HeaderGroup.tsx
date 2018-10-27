import * as React from 'react'
import { SwitchButton, UndoRedoButton } from '../../../../../../../../components'

const TextGroup = () => {
	return (
		<div>
			<div className="group">
				<UndoRedoButton />
			</div>
			<div className="group">
				<div className="toolbar-item switch">
					<SwitchButton
						checked={false}
						id="custom-header"
						onChange={() => {
							console.log('clicked')
						}}
					/>
					<span>Custom Header</span>
				</div>
			</div>
		</div>
	)
}

export default TextGroup
