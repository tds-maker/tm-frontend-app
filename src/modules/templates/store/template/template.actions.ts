import IAction from "../../../../store/IAction";

export const INIT_TEMPLATE = "TEMPLATES/INIT_TEMPLATE";
export const LOAD_TEMPLATE = "TEMPLATES/LOAD_TEMPLATE";
export const TEMPLATE_FETCHED = "TEMPLATES/TEMPLATE_FETCHED";
export const CHANGE_NAME = "TEMPLATES/CHANGE_NAME";
export const SET_LANGUAGES = "TEMPLATES/SET_LANGUAGES";
export const SET_PRIMARY_LANGUAGE = "TEMPLATES/SET_PRIMARY_LANGUAGE";
export const SET_PRODUCT_NO_OPTION = "TEMPLATES/SET_PRODUCT_NO_OPTION";
export const CREATE_NEW_TEMPLATE = "TEMPLATES/CREATE_NEW_TEMPLATE";
export const NEW_TEMPLATE_CREATED = "TEMPLATES/NEW_TEMPLATE_CREATED";

export const loadTemplate = (id: string): IAction => ({
	type: LOAD_TEMPLATE,
	payload: id
});

export const initTemplate = (): IAction => ({ type: INIT_TEMPLATE });

export const changeName = (name: string): IAction => ({
	type: CHANGE_NAME,
	payload: name
});

export const selectLanguage = (isSelected: boolean, language: string): IAction => ({ type: SET_LANGUAGES, payload: { isSelected, language } });

export const selectPrimaryLanguage = (language: string): IAction => ({
	type: SET_PRIMARY_LANGUAGE,
	payload: language
});

export const selectProductNumberOption = (option: string): IAction => ({
	type: SET_PRODUCT_NO_OPTION,
	payload: option
});

export const createNewTemplate = (): IAction => ({ type: CREATE_NEW_TEMPLATE });
