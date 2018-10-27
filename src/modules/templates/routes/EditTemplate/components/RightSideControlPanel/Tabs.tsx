import * as React from 'react'
import Tab from './Tab'

export interface IState {
	activeTab: number
	isPanelOpen: boolean
}

export default class Tabs extends React.PureComponent<any, IState> {
	constructor(props: any) {
		super(props)
		this.state = {
			activeTab: 0,
			isPanelOpen: false,
		}
	}

	public render() {
		return (
			<React.Fragment>
				<div className="main-right-side-control-panel">
					<div
						onClick={this.tooglePanel}
						className={`side-panel-toggle ${this.state.isPanelOpen ? 'active' : ''}`}
					/>
					<ul className="tabs">{this.returnChildren()}</ul>
				</div>
				<div className={`main-right-side ${this.state.isPanelOpen ? 'show' : ''}`}>
					<div className="main-right-tabs">{this.returnContent()}</div>
				</div>
			</React.Fragment>
		)
	}
	private returnContent = () =>
		React.Children.map(this.props.children, (child: JSX.Element) => {
			return (
				<div
					className={`tabs__content ${
						child.props.tabIndex === this.state.activeTab ? 'active' : ''
					}`}>
					<div className="scroll-container custom-scrollbar">{child.props.children}</div>
				</div>
			)
		})
	private returnChildren = () =>
		React.Children.map(this.props.children, (child: JSX.Element, i) => {
			return (
				<Tab
					activeTab={this.state.activeTab}
					key={`tab-${i}`}
					title={child.props.title}
					tabIcon={child.props['data-icon']}
					tabIndex={child.props.tabIndex}
					onTabClick={this.handleClickTabItem}
				/>
			)
		})
	private tooglePanel = () => {
		this.setState(prevState => ({
			isPanelOpen: !prevState.isPanelOpen,
		}))
	}
	private handleClickTabItem = (tabIndex: number) => {
		this.setState({ activeTab: tabIndex })
	}
}
