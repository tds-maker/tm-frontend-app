import IAction from "../../../../store/IAction";
import Template from "../../models/Template";
import BaseReducer from "../../../../store/BaseReducer";

class TemplateReducer extends BaseReducer<Template> {
	public initTemplate() {
		return new Template();
	}
	public loadTemplate(state: Template): Template {
		return <Template>state.set("isFetching", true);
	}
	public templateFetched(state: Template, data: any): Template {
		return new Template(data);
	}

	public changeName(state: Template, name: string): Template {
		return <Template>state.set("name", name);
	}

	public setLanguages(state: Template, payload: { isSelected: boolean; language: string }): Template {
		let newState: Template | undefined = undefined;
		const primaryLanguage = state.primaryLanguage;

		if (payload.isSelected && primaryLanguage) {
			newState = state.updateIn(["languages"], languages => languages.push(payload.language)) as Template;
		} else if (payload.isSelected && !primaryLanguage) {
			newState = state.updateIn(["languages"], languages => languages.push(payload.language)).set("primaryLanguage", payload.language) as Template;
		} else if (!payload.isSelected && payload.language !== primaryLanguage) {
			newState = state.updateIn(["languages"], languages => languages.splice(languages.indexOf(payload.language), 1)) as Template;
		} else if (!payload.isSelected) {
			newState = state.updateIn(["languages"], languages => languages.splice(languages.indexOf(payload.language), 1)) as Template;
			newState = newState.set("primaryLanguage", newState.languages.get(0) || "") as Template;
		}
		return newState || state;
	}

	public setPrimaryLanguage(state: Template, language: string): Template {
		return state.set("primaryLanguage", language) as Template;
	}

	public setProductNoOption(state: Template, option: string): Template {
		return state.set("productNumberOption", option) as Template;
	}
}

const reducer = new TemplateReducer();
export default function(state: Template = new Template(), action: IAction) {
	return reducer.call(state, action);
}
