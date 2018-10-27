import * as React from 'react'
import { HeadContainer } from '../../../../components'
import Toolbar from './components/Toolbar/Toolbar'
import { IInfoStore, IOptionsStore } from './ducks/interfaces'
import './editTemplate.style.scss'
import MainLeftSide from './components/MainLeftSide/MainLeftSide'
import MainBox from './components/MainBox/MainBox'
import RightSideControlPanel from './components/RightSideControlPanel/RightSideControlPanel'
import PageHeader from './components/PageHeader'
import PageBody from './components/PageBody'
import Page from './components/Page'
import PageFooter from './components/PageFooter'

interface IProps {
	info: IInfoStore
	languages: string
	options: IOptionsStore
	fetchTemplate: (id: string) => void
}

class EditTemplate extends React.Component<IProps> {
	public componentWillMount() {
		this.props.fetchTemplate('fake-id')
	}
	public render() {
		const { name, version } = this.props.info
		const { languages, options } = this.props
		return (
			<React.Fragment>
				<HeadContainer name={name} version={version} languages={languages}>
					<Toolbar activeToolbar={options.activeToolbar} />
				</HeadContainer>
				<div className="main-container">
					<MainLeftSide />
					<MainBox>
						<Page>
							<PageHeader />
							<PageBody />
							<PageFooter />
						</Page>
					</MainBox>
					<RightSideControlPanel />
				</div>
			</React.Fragment>
		)
	}
}

export default EditTemplate
