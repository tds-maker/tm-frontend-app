import classNames from 'classnames'
import * as React from 'react'
import './button.css'

interface IProps {
	color?: string
	className?: string
	children?: any
	id?: string
	size?: string
	onClick?: ((e: any) => void)
	disabled?: boolean
	type?: string
	style?: any
	renderAs?: any
}

const Button: React.SFC<IProps> = (props: IProps) => {
	const classes = classNames({
		'tm-btn': true,
		'tm-btn-small': props.size && props.size === 'small' ? true : false,
		[`tm-btn-${props.color}`]: props.color ? true : false,
		[props.className || '']: true,
	})

	return (
		<button {...props} className={classes}>
			{props.children}
		</button>
	)
}

export default Button
