import * as React from 'react'
import './page.style.scss'
import { IPage } from '../../ducks/interfaces'
import PageHeader from './PageHeader'
import PageBody from './PageBody'
import PageFooter from './PageFooter'

interface IProps {
	page: IPage
}

class Page extends React.Component<IProps> {
	public render() {
		return (
			<div className="page" style={this.props.page.style}>
				<PageHeader />
				<PageBody />
				<PageFooter />
			</div>
		)
	}
}
export default Page
