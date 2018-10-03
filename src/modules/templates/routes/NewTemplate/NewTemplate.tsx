import * as React from "react";

import { initTemplate, createNewTemplate } from "../../store/template/template.actions";
import Template from "../../models/Template";
import { Header, Tab, Tabs } from "../../../../components";
import WelcomeTab from "./components/WelcomeTab";
import DecisionTab from "./components/DecisionTab";
import TemplateTab from "./components/TemplateTab";
import FolderTab from "./components/FolderTab";

import Folder from "../../../folders/models/Folder";

export interface IProps {
	action: (action: any) => void;
	template: Template;
	selectedFolder?: Folder;
}

interface IState {
	activeTab: number;
}

export default class NewTemplate extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = { activeTab: -1 };

		this.onTabClicked = this.onTabClicked.bind(this);
		this.onSaveTemplate = this.onSaveTemplate.bind(this);
	}

	public componentWillMount() {
		this.props.action(initTemplate());
	}

	public render() {
		return (
			<div>
				<Header />
				<div className="container main">
					{this.state.activeTab < 0 ? (
						<WelcomeTab onButtonClick={this.onTabClicked} />
					) : (
						<Tabs activeTab={this.state.activeTab} onTabClicked={this.onTabClicked}>
							<Tab header="Step 1" className="first-tab text-center">
								<DecisionTab onButtonClicked={this.onTabClicked} />
							</Tab>
							<Tab header="Step 2" className="second-tab">
								<TemplateTab onChangeTab={this.onTabClicked} />
							</Tab>
							<Tab header="Step 3" className="folder-tab">
								<FolderTab onChangeTab={this.onTabClicked} saveTemplate={this.onSaveTemplate} />
							</Tab>
						</Tabs>
					)}
				</div>
			</div>
		);
	}

	private onTabClicked(index: number) {
		this.setState({ activeTab: index });
	}

	private onSaveTemplate() {
		this.props.action(createNewTemplate());
	}
}
