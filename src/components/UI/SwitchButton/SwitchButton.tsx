import classNames from 'classnames'
import * as React from 'react'
import './switchbutton.css'

interface IProps {
	onChange?: ((e: any) => void)
	id?: string
	checked: boolean
	children?: string
}

const SwitchButton: React.SFC<IProps> = ({ id, onChange, checked, children }: IProps) => {
	const className = classNames({
		'onoffswitch-checkbox': true,
	})
	return (
		<div className="onoffswitch">
			<input
				type="checkbox"
				name="onoffswitch"
				checked={checked}
				className={className}
				id={id}
				onChange={onChange}
			/>
			<label className="onoffswitch-label" htmlFor={id} />
		</div>
	)
}
export default SwitchButton
