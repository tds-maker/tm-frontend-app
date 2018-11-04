import * as React from 'react'
import { HeadContainer } from '../../../../components'
import Toolbar from './components/Toolbar/Toolbar'
import './editTemplate.style.scss'
import MainLeftSide from './components/MainLeftSide/MainLeftSide'
import MainBox from './components/MainBox/MainBox'
import RightSideControlPanel from './components/RightSideControlPanel/RightSideControlPanel'
import { IEditTemplateCommonReducer, IEditTemplateStateReducer, IPage } from './ducks/interfaces'
import Page from './components/Page'

interface IProps {
	common: IEditTemplateCommonReducer
	state: IEditTemplateStateReducer
	languages: string
	fetchTemplate: (id: string) => void
}

class EditTemplate extends React.Component<IProps> {
	public componentWillMount() {
		this.props.fetchTemplate('fake-id')
	}

	public render() {
		const { languages, state, common } = this.props
		const { name, majorVersion, minorVersion } = common

		if (state.fetchedFromServer) {
			return (
				<React.Fragment>
					<HeadContainer
						name={name}
						version={`v${majorVersion}.${minorVersion}`}
						languages={languages}>
						<Toolbar activeToolbar={state.activeToolbar} />
					</HeadContainer>
					<div className="main-container">
						<MainLeftSide />
						<MainBox>
							<Page />
						</MainBox>
						<RightSideControlPanel />
					</div>
				</React.Fragment>
			)
		} else {
			return <div>Loading...</div>
		}
	}
}

export default EditTemplate
