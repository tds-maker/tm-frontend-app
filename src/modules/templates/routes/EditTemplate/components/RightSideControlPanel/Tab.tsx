import * as React from 'react'

interface IProps {
	tabIndex: number
	activeTab: number
	onTabClick: ((e: number) => void)
	title: string
	tabIcon: string
}

const Tab: React.SFC<IProps> = ({ activeTab, tabIndex, onTabClick, title, tabIcon }: IProps) => (
	<li className={activeTab === tabIndex ? 'active' : ''} onClick={() => onTabClick(tabIndex)}>
		<i className={tabIcon} /> {title}
	</li>
)

export default Tab
