import * as React from 'react'
import Input from '../Input/Input'
import SelectList, { ISelectItem } from '../SelectList/SelectList'
import './templateselect.css'

export interface ITemplates {
	imageURL: string
	templateId: number
}
interface IProps {
	onSelectCategory?: ((e: any) => void)
	onSearch?: ((e: any) => void)
	items: ISelectItem[]
	templates: ITemplates[]
	onTemplateSelect?: ((e: any) => void)
}

export default class TemplateSelect extends React.PureComponent<IProps> {
	public render() {
		const { onSelectCategory, onSearch, items, templates, onTemplateSelect } = this.props

		return (
			<div className="main-right-side">
				<div className="main-right-tabs">
					<div className="tabs_content active">
						<form className="search-template">
							<Input
								type="search"
								className="input"
								placeholder="Search template"
								onChange={onSearch}
							/>
							<button className="btn-search" />
						</form>
						<SelectList
							width="250px"
							items={items}
							placeholder="SelectList"
							onChange={onSelectCategory}
						/>
						<div className="templates-container custom-scrollbar">
							{templates.map((e, i) => {
								return (
									<div
										onClick={onTemplateSelect}
										key={i}
										className="template-box">
										<img src={e.imageURL} />
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		)
	}
}
