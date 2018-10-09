import * as React from 'react'

import { Button } from '../../../../../../components'
import FolderNameLabel from '../../../../../folders/components/FolderNameLabel'
import FoldersTree from '../../../../../folders/components/FoldersTreeUI'
import NewFolder from '../../../../../folders/components/NewFolder'
import TemplatesTable from '../../../../components/TemplatesTable'

export interface IProps {
	onChangeTab?: (index: number) => void
	saveTemplate?: () => void
}

export default class FolderTab extends React.PureComponent<IProps, any> {
	constructor(props: IProps) {
		super(props)
		this.state = {
			newFolderVisible: false,
		}

		this.toggleNewFolderPopup = this.toggleNewFolderPopup.bind(this)
	}

	public render() {
		return (
			<div style={{ display: 'flex', width: '100%' }}>
				<div className="tab-col">
					<div className="col-head">
						<Button
							color="border-blue"
							size="small"
							onClick={this.toggleNewFolderPopup}>
							<i className="icon-add" /> New
						</Button>
					</div>
					<FoldersTree folderType="template" />
				</div>
				<div className="tab-col">
					<div className="col-head clearfix">
						<FolderNameLabel folderType="template" renderAs="h3" />
						<Button
							className="pull-right"
							size="small"
							color="gray3"
							onClick={this.toggleNewFolderPopup}>
							Create Folder
						</Button>
					</div>

					<TemplatesTable />
					<NewFolder
						folderType="template"
						isActive={this.state.newFolderVisible}
						onCloseClick={this.toggleNewFolderPopup}
					/>
					<div className="step-action" style={{ marginTop: '20px' }}>
						<Button id="prev" color="gray2" onClick={this.changeTab.bind(this, 1)}>
							Previous
						</Button>
						<Button id="save" color="blue" onClick={this.props.saveTemplate}>
							Save Template
						</Button>
					</div>
				</div>
			</div>
		)
	}

	private changeTab(index: number) {
		const { onChangeTab = () => null } = this.props
		onChangeTab(index)
	}

	private toggleNewFolderPopup() {
		this.setState({
			newFolderVisible: !this.state.newFolderVisible,
		})
	}
}
