import * as React from 'react'
import { BodySpacing, SwitchButton } from '../../../../../../../../../components'

interface IProps {
	margin: any
	changePadding: ({ value, position }: { value: number; position: string }) => void
	changeHeaderState: (isEnabled: boolean) => void
	changeFooterState: (isEnabled: boolean) => void
	hasHeader: boolean
	hasFooter: boolean
}

class PageSettings extends React.Component<IProps> {
	constructor(props: IProps) {
		super(props)
		this.onHeaderStatusChange = this.onHeaderStatusChange.bind(this)
		this.onFooterStatusChange = this.onFooterStatusChange.bind(this)
	}
	public render() {
		const { margin, changePadding, hasHeader, hasFooter } = this.props
		const { top, left, bottom, right } = margin
		return (
			<React.Fragment>
				<div className="body-padding-box">
					<h5>Page Settings</h5>
					<BodySpacing
						bottom={bottom}
						right={right}
						left={left}
						top={top}
						handleChange={changePadding}
					/>
				</div>
				<div className="body-padding-box" style={{ marginTop: '30px' }}>
					<h5>Header</h5>
					<SwitchButton
						checked={hasHeader}
						id="enable-disable-header"
						onChange={this.onHeaderStatusChange}
					/>
					<span>Enabled - Disabled</span>
				</div>
				<div className="body-padding-box" style={{ marginTop: '30px' }}>
					<h5>Footer</h5>
					<SwitchButton
						checked={hasFooter}
						id="enable-disable-footer"
						onChange={this.onFooterStatusChange}
					/>
					<span>Enabled - Disabled</span>
				</div>
			</React.Fragment>
		)
	}

	private onHeaderStatusChange(e: any) {
		this.props.changeHeaderState(e.target.checked)
	}

	private onFooterStatusChange(e: any) {
		this.props.changeFooterState(e.target.checked)
	}
}

export default PageSettings
