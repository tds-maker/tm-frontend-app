import * as React from 'react'
import classnames from 'classnames'
import INotify from './INotify'

import './notify.scss'

export interface IProps {
	notifications?: INotify[]
}

export default class Notify extends React.PureComponent<IProps> {
	public render(): JSX.Element | null {
		const { notifications = [] } = this.props
		return (
			<div className="tm-notify-container">
				{notifications.reverse().map((notification: INotify) => {
					const className = classnames({
						'tm-notify': true,
						error: notification.color === 'error' || notification.color === 'red',
					})
					return (
						<div key={notification.id} className={className}>
							<h3>{notification.title}</h3>
							<p>{notification.message}</p>
						</div>
					)
				})}
			</div>
		)
	}
}
