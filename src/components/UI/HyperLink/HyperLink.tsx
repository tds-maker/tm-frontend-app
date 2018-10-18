import * as React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import Popover from '../Popover/Popover'
import './hyperlink.css'

export interface IAppProps {
	onApplyClick: (value: string) => void
}

export interface IAppState {
	value: string
}

export default class IApp extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props)
		this.state = {
			value: '',
		}
	}

	public render() {
		return (
			<Popover
				popoverTypeClass="link-popover"
				popoverTypeId="link_popover"
				dropdownIcon="icon-insert_link">
				<div>
					<p className="label">Link</p>
					<form onSubmit={this.handleSubmit}>
						<Input
							value={this.state.value}
							onChange={this.handleChange}
							type="text"
							className="input dark"
							placeholder="Paste a link"
						/>
						<Button className=" apply btn btn-medium btn-blue" type="submit">
							Apply
						</Button>
					</form>
				</div>
			</Popover>
		)
	}
	private handleChange = (event: React.FormEvent) => {
		const target = event.target as HTMLSelectElement
		this.setState({ value: target.value })
	}
	private handleSubmit = (event: React.FormEvent<EventTarget>) => {
		if (this.props.onApplyClick) {
			this.props.onApplyClick(this.state.value)
			this.setState({ value: '' })
		}
		event.preventDefault()
	}
}
