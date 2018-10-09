import * as React from 'react'

import './inputNumber.css'

interface IProps {
	value?: number | string
	onValueChanged: any
}

interface IState {
	value?: number
}

export default class InputNumber extends React.PureComponent<IProps, IState> {
	constructor(props: IProps) {
		super(props)

		this.state = {
			value:
				props.value !== undefined ? this.convertNumber(props.value.toString()) : undefined,
		}

		this.onValueChange = this.onValueChange.bind(this)
		this.onButtonClick = this.onButtonClick.bind(this)
	}

	public componentWillReceiveProps(nextProps: IProps) {
		if (nextProps.value !== undefined) {
			this.setState({
				value: this.convertNumber(nextProps.value.toString()),
			})
		}
	}

	public render() {
		return (
			<div>
				<div>
					<input
						type="text"
						onKeyPress={this.isNumber}
						onChange={this.onValueChange}
						value={this.state.value !== undefined ? this.state.value : 0}
						className="input small qty"
					/>
				</div>
				<div>
					<button className="qtyplus" onClick={this.onButtonClick}>
						+
					</button>
					<button className="qtyminus" onClick={this.onButtonClick}>
						-
					</button>
				</div>
			</div>
		)
	}

	private onValueChange(e: any) {
		const newValue = this.convertNumber(e.target.value)
		this.setState({
			value: newValue,
		})
		this.props.onValueChanged(newValue)
	}

	private onButtonClick(e: any) {
		let currentValue = this.state.value !== undefined ? this.state.value : '0'
		currentValue = this.convertNumber(currentValue.toString())
		this.setState(
			{
				value: e.target.className === 'qtyplus' ? currentValue + 1 : currentValue - 1,
			},
			() => this.props.onValueChanged(this.state.value)
		)
	}

	private isNumber(e: any): boolean {
		e = e ? e : window.event
		const charCode = e.which ? e.which : e.keyCode
		if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
			e.preventDefault()
			return false
		} else {
			return true
		}
	}

	private convertNumber(param: string): number {
		try {
			return parseFloat(param)
		} catch (error) {
			return 0
		}
	}
}
