import * as React from 'react'
import './page.style.scss'
import { IPage } from '../../ducks/interfaces'

interface IProps {
	page: IPage
}

class Page extends React.Component<IProps> {
	public render() {
		return (
			<div className="page" style={this.props.page.style}>
				{this.props.children}
			</div>
		)
	}
}
export default Page
