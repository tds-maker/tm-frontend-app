import * as React from 'react'
import TextGroup from './groups/TextGroup'
import './toolbar.style.scss'

interface IProps {
	activeToolbar: string
}

class Toolbar extends React.PureComponent<IProps> {
	public renderGroup(groupName: string) {
		switch (groupName) {
			case 'text':
				return <TextGroup />
			default:
				return null
		}
	}
	public render() {
		return (
			<div className="toolbar clearfix">
				<div className="toolbar-left clearfix">
					{this.renderGroup(this.props.activeToolbar)}
				</div>
				<div className="toolbar-right">
					<div className="group">
						<div className="dropdown toolbar-item translate">
							<span className="selected">Translate</span>
							<span className="arrow" />
						</div>
					</div>
					<div className="group" />
				</div>
			</div>
		)
	}
}

export default Toolbar
