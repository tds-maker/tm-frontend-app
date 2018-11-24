import * as React from 'react'
import './page.style.scss'
import { IPage } from '../../ducks/interfaces'
import PageHeader from './PageHeader'
import PageBody from './PageBody'
import PageFooter from './PageFooter'

interface IProps {
	page: IPage
	deselectElement: () => void
}

class Page extends React.Component<IProps> {
	constructor(props: IProps) {
		super(props)
		this.onClick = this.onClick.bind(this)
	}
	public render() {
		return (
			<div className="page" style={this.props.page.style} onClick={this.onClick}>
				<PageHeader />
				<PageBody />
				<PageFooter />
			</div>
		)
	}

	private onClick(e: any) {
		console.log('page')
		this.props.deselectElement()
	}
}
export default Page
