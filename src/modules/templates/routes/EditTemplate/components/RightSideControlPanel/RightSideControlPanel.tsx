import * as React from 'react'
import './rightsidecontrolpanel.css'
import Settings from './components/Settings/Settings'
import Layouts from './components/Layouts/Layouts'
import Content from './components/Content/Content';
import Tabs from './Tabs'

export default class RightSideControlPanel extends React.PureComponent<any, any> {
	public render() {
		return (
			<Tabs>
				<div data-icon="icon-folder" title="TEMPLATE" tabIndex={0}>
					LAYOUT
				</div>
				<div data-icon="icon-view_quilt" title="LAYOUT" tabIndex={1}>
					<Layouts />
				</div>
				<div data-icon="icon-side_content" title="CONTENT" tabIndex={2}>
					<Content />
				</div>
				<div data-icon="icon-settings" title="SETTINGS" tabIndex={3}>
					<Settings />
				</div>
			</Tabs>
		)
	}
}
