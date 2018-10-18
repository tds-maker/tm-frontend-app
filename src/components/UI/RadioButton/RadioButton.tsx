import * as React from 'react'

import './radioButton.css'

interface IProps {
	value: string | number
	selectedValue?: string | number
	label?: string
	name: string
	onChange?: ((e: any) => void)
}

const RadioButton: React.SFC<IProps> = ({
	value,
	selectedValue,
	label,
	name,
	onChange,
}: IProps) => {
	const checked = selectedValue === value

	return (
		<label className="tm-radio">
			<input
				type="radio"
				className="radio"
				value={value}
				checked={checked}
				name={name}
				onChange={onChange}
			/>
			<span className="text">{label}</span>
		</label>
	)
}

export default RadioButton
