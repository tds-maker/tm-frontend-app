import classNames from 'classnames'
import * as React from 'react'
import './switchbutton.css'

interface IProps {
	onChange?: ((e: any) => void)
	id?: string
	checked: boolean
}

const SwitchButton: React.SFC<IProps> = ({ id, onChange, checked }: IProps) => {
	const className = classNames({
		'onoffswitch-checkbox': true,
	})
	return (
		<input
			type="checkbox"
			name="onoffswitch"
			checked={checked}
			className={className}
			id={id}
			onChange={onChange}
		/>
	)
}
export default SwitchButton
