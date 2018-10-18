import * as React from 'react'
import Folder from '../../models/Folder'

export interface IProps {
	selectedFolder?: Folder
	folderType: string
	renderAs?: string
}

export default ({ selectedFolder, folderType = 'template', renderAs }: IProps) => {
	const folderName = selectedFolder ? selectedFolder.name : ''
	switch (renderAs) {
		case 'h3':
			return <h3>{folderName}</h3>
		default:
			return <div>{folderName}</div>
	}
}
