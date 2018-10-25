import * as React from 'react'
import { UndoRedoButton } from '../../../../../../../components';
// import FontFamily from '../../FontFamily/FontFamily';
// import FontSize from '../../FontSize/FontSize';
// import FontStyleButtons from '../../FontStylesButtons/FontStylesButtons';

const TextGroup = () => {
	return (
		<div>
			<div className="group">
				<UndoRedoButton />
			</div>
            {/* <div className="group">
                <FontFamily />
                <FontSize />
            </div>
            <div className="group">
                <FontStyleButtons/>
            </div> */}
		</div>
	)
}

export default TextGroup
