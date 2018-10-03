import IAction from "../../../../store/IAction";

export const START_FETCHING_TEMPLATES = "TEMPLATES/START_FETCHING_TEMPLATES";
export const TEMPLATES_FETCHED = "TEMPLATES/TEMPLATES_FETCHED";

export const getTemplates = (): IAction => ({
	type: START_FETCHING_TEMPLATES
});
