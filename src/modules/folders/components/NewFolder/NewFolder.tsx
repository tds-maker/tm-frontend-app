import * as React from 'react'

import { Button, Input } from '../../../../components'

import './newFolder.scss'

export interface IProps {
	folderType: string
	isActive: boolean
	onCloseClick: () => void
	createFolder?: (folderType: string, name: string) => void
}

interface IState {
	folderName: string
}

export default class NewFolder extends React.PureComponent<IProps, IState> {
	constructor(props: IProps) {
		super(props)

		this.state = {
			folderName: '',
		}

		this.onValueChange = this.onValueChange.bind(this)
		this.onCreate = this.onCreate.bind(this)
	}

	public componentDidUpdate() {
		const wrapper = document.getElementById('createFolderInput')
		if (wrapper) {
			wrapper.focus()
		}
	}

	public render(): JSX.Element | null {
		return this.props.isActive ? (
			<div className="create-folder-popup popup">
				<span className="close-popup" onClick={this.props.onCloseClick}>
					<i className="icon-clear" />
				</span>
				<label>New Folder</label>
				<form onSubmit={this.onCreate} className="new-folder">
					<Input
						color="dark"
						placeholder="Type folder name"
						value={this.state.folderName}
						onChange={this.onValueChange}
						id="createFolderInput"
					/>
					<Button color="blue" type="submit" renderAs="button">
						Create
					</Button>
				</form>
			</div>
		) : null
	}

	private onValueChange(e: any) {
		this.setState({
			folderName: e.target.value,
		})
	}

	private onCreate(e: React.FormEvent) {
		e.preventDefault()
		if (!this.state.folderName || this.state.folderName === '') {
			return
		} else {
			if (this.props.createFolder) {
				this.props.createFolder(this.props.folderType, this.state.folderName)
				this.props.onCloseClick()
				this.setState({ folderName: '' })
			}
		}
	}
}
