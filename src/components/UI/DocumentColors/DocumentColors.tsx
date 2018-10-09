import * as React from 'react'
import { ColorPalette } from '../../index'
import './documentcolors.css'

const DocumentColors: React.SFC<any> = () => {
	return (
		<div>
			<p>Document Colors</p>
			<ColorPalette customize={true} colors={[]} />
			<ColorPalette title="Palette" customize={false} colors={['#000', '#4f4f4f']} />
		</div>
	)
}

export default DocumentColors
