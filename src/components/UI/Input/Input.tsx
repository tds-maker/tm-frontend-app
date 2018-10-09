import classNames from 'classnames'
import * as React from 'react'
import './input.css'

interface IProps {
	className?: string
	color?: string
	type?: string
	placeholder?: string
	onChange?: (e: any) => void
	value?: string | number
	id?: string
}

const Input: React.SFC<IProps> = (props: IProps) => {
	const inputClasses = classNames(
		{
			'tm-input': true,
			[`tm-input-${props.color}`]: true,
			...(props.className ? props.className.split(' ') : ''),
		},
		props.className
	)

	return <input {...props} className={inputClasses} />
}

Input.defaultProps = {
	color: 'default',
	type: 'text',
}

export default Input
