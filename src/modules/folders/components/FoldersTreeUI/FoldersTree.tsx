import classNames from 'classnames'
import { List } from 'immutable'
import * as React from 'react'
import Folder from '../../models/Folder'
import { fetchFolders, selectFolder, toggleFolder } from '../../store/folder.actions'
import './css/folders.css'

export interface IProps {
	folders?: List<Folder>
	folderType: string
	dispatch?: (action: any) => void
}

class FoldersTree extends React.Component<IProps> {
	public componentDidMount() {
		if (this.props.dispatch) {
			this.props.dispatch(fetchFolders(this.props.folderType))
		}
	}

	public render() {
		const { folders } = this.props
		if (!folders) {
			return null
		}

		const rootFolder = folders.find((folder: Folder) => folder.parentId === undefined)
		const selectedFolder = folders.find((folder: Folder) => folder.isCurrent)

		return (
			<ul className="tm-folders">
				{[rootFolder].map(this.renderFolderItem.bind(this, selectedFolder))}
			</ul>
		)
	}

	private renderFolderItem(selectedFolder: Folder, folder: Folder): JSX.Element | null {
		const { folders } = this.props
		if (!folder || !folders) {
			return null
		}

		const childNodes = folders.filter((x: Folder) => x.parentId === folder._id)

		const folderClassNames = classNames({
			'has-child': childNodes && childNodes.size > 0,
			current: selectedFolder ? selectedFolder._id === folder._id : false,
			open: folder.isOpen,
		})

		return (
			<li
				key={folder._id}
				className={folderClassNames}
				onClick={this.onFolderClick.bind(this, folder._id)}>
				<span className="noselect">{folder.name}</span>
				{folder.isOpen && childNodes && childNodes.size > 0 ? (
					<ul style={{ display: true ? 'block' : 'none' }}>
						{childNodes.map(this.renderFolderItem.bind(this, selectedFolder))}
					</ul>
				) : null}
			</li>
		)
	}

	private onFolderClick(folderId: string, e: any) {
		e.stopPropagation()
		if (this.props.dispatch) {
			this.props.dispatch(selectFolder(folderId, this.props.folderType))
			this.props.dispatch(toggleFolder(folderId, this.props.folderType))
		}
	}
}

export default FoldersTree
