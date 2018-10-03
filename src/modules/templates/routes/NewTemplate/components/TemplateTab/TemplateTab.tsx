import * as React from "react";

import { Button, CheckBox, Input, ISelectItem, SelectList } from "../../../../../../components";
import Template from "../../../../models/Template";

import { changeName, selectLanguage, selectPrimaryLanguage, selectProductNumberOption } from "../../../../store/template/template.actions";

export interface IProps {
	template?: Template;
	languages?: object;
	dispatch?: (action: any) => void;
	onChangeTab?: (index: number) => void;
}

export default class TemplateTab extends React.PureComponent<IProps> {
	private productNumberOptions: ISelectItem[] = [{ value: "optional", text: "Optional" }, { value: "must", text: "Must" }, { value: "unique", text: "Unique" }, { value: "None", text: "None" }];

	constructor(props: IProps) {
		super(props);

		this.onTemplateNameChanged = this.onTemplateNameChanged.bind(this);
		this.onProductNumberOptionsChnage = this.onProductNumberOptionsChnage.bind(this);
		this.onLanguageCheck = this.onLanguageCheck.bind(this);
		this.primaryLanguageOptions = this.primaryLanguageOptions.bind(this);
		this.onPrimaryLanguageSelected = this.onPrimaryLanguageSelected.bind(this);
		this.isNextDisabled = this.isNextDisabled.bind(this);
	}
	public render() {
		const { template } = this.props;

		if (!template) {
			throw new Error("Template is undefined!");
		}

		return (
			<div style={{ display: "table", width: "100%" }}>
				<div className="tab-col">
					<label>TEMPLATE NAME</label>
					<Input placeholder="Please write template name" onChange={this.onTemplateNameChanged} value={template.name} />
					<label>PRODUCT NUMBER</label>
					<SelectList placeholder="Select an item" items={this.productNumberOptions} selectedValue={template.productNumberOption} onChange={this.onProductNumberOptionsChnage} />
				</div>
				<div className="tab-col">
					<label>TEMPLATE LANGUAGES</label>

					<div className="input-col">
						<CheckBox id="en" label="English" onChange={this.onLanguageCheck} rounded={true} checked={template.languages.indexOf("en") >= 0} />
						<CheckBox id="gr" label="German" onChange={this.onLanguageCheck} rounded={true} checked={template.languages.indexOf("gr") >= 0} />
						<CheckBox id="fr" label="French" onChange={this.onLanguageCheck} rounded={true} checked={template.languages.indexOf("fr") >= 0} />
					</div>
					<div className="input-col">
						<CheckBox id="tr" label="Turkish" onChange={this.onLanguageCheck} rounded={true} checked={template.languages.indexOf("tr") >= 0} />
						<CheckBox id="zh-cn" label="Chinese" onChange={this.onLanguageCheck} rounded={true} checked={template.languages.indexOf("zh-cn") >= 0} />
						<CheckBox id="hu" label="Hungarian" onChange={this.onLanguageCheck} rounded={true} checked={template.languages.indexOf("hu") >= 0} />
					</div>
					<div className="input-col">
						<CheckBox id="es" label="Spanish" onChange={this.onLanguageCheck} rounded={true} checked={template.languages.indexOf("es") >= 0} />
						<CheckBox id="el" label="Greek" onChange={this.onLanguageCheck} rounded={true} checked={template.languages.indexOf("el") >= 0} />
						<CheckBox id="ru" label="Russian" onChange={this.onLanguageCheck} rounded={true} checked={template.languages.indexOf("ru") >= 0} />
					</div>
					<div className="input-col">
						<CheckBox id="it" label="Italian" onChange={this.onLanguageCheck} rounded={true} checked={template.languages.indexOf("it") >= 0} />
						<CheckBox id="id" label="Indonesian" onChange={this.onLanguageCheck} rounded={true} checked={template.languages.indexOf("id") >= 0} />
						<CheckBox id="vi" label="Vietnamese" onChange={this.onLanguageCheck} rounded={true} checked={template.languages.indexOf("vi") >= 0} />
					</div>
					<br />
					<label>PRIMARY LANGUAGE</label>
					<SelectList placeholder="Select an item" selectedValue={template.primaryLanguage} items={this.primaryLanguageOptions()} width="300px" onChange={this.onPrimaryLanguageSelected} />
					<div className="step-action">
						<Button id="prev" color="gray2" onClick={this.changeTab.bind(this, 0)}>
							Previous
						</Button>
						<Button id="next" color="blue" disabled={this.isNextDisabled()} onClick={this.changeTab.bind(this, 2)}>
							Next
						</Button>
					</div>
				</div>
			</div>
		);
	}

	private changeTab(index: number) {
		const { onChangeTab = () => null } = this.props;
		onChangeTab(index);
	}

	private onTemplateNameChanged(e: any) {
		if (this.props.dispatch) {
			this.props.dispatch(changeName(e.target.value));
		}
	}

	private onProductNumberOptionsChnage(item: ISelectItem) {
		if (this.props.dispatch) {
			this.props.dispatch(selectProductNumberOption(item.value));
		}
	}

	private onLanguageCheck(e: any) {
		if (this.props.dispatch) {
			this.props.dispatch(selectLanguage(e.target.checked, e.target.id));
		}
	}

	private primaryLanguageOptions(): ISelectItem[] {
		if (!this.props.template || !this.props.languages) {
			return [];
		}
		const allLanguages = this.props.languages!;
		return this.props.template.languages.toArray().map(l => ({
			value: l,
			text: allLanguages[l]
		}));
	}

	private onPrimaryLanguageSelected(item: ISelectItem) {
		if (this.props.dispatch) {
			this.props.dispatch(selectPrimaryLanguage(item.value));
		}
	}

	private isNextDisabled() {
		if (!this.props.template) {
			return false;
		}
		const { name, primaryLanguage } = this.props.template;
		return !(primaryLanguage && primaryLanguage !== "" && name !== "");
	}
}
