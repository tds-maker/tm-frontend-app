import reducer from "./template.reducer";
import Template from "../../models/Template";
import { LOAD_TEMPLATE, TEMPLATE_FETCHED, INIT_TEMPLATE, SET_LANGUAGES, SET_PRIMARY_LANGUAGE, SET_PRODUCT_NO_OPTION } from "./template.actions";

describe("Template reducer", () => {
	it("should return default state when action is null", () => {
		const state = reducer(undefined, { type: "" });
		expect(state instanceof Template).toBeTruthy();
		expect(state.isFetching).toBeFalsy();
		expect(state.name).toEqual("");
	});

	it("should return fetching state for LOAD_TEMPLATE", () => {
		const state = reducer(undefined, { type: LOAD_TEMPLATE });
		expect(state.isFetching).toBeTruthy();
	});

	it("should set template data on TEMPLATE_FETCHED", () => {
		const state = reducer(undefined, {
			type: TEMPLATE_FETCHED,
			payload: { name: "fake-template" }
		});
		expect(state.isFetching).toBeFalsy();
		expect(state.name).toEqual("fake-template");
	});

	it("should return new template state on init template", () => {
		const prevState = reducer(undefined, {
			type: TEMPLATE_FETCHED,
			payload: { name: "fake-template" }
		});
		expect(prevState.name).toEqual("fake-template");

		const state = reducer(prevState, { type: INIT_TEMPLATE });
		expect(state.name).toEqual("");
	});

	it("should add language to list if selected", () => {
		const state: Template = reducer(undefined, {
			type: SET_LANGUAGES,
			payload: {
				language: "tr",
				isSelected: true
			}
		});

		expect(state.languages.size).toEqual(2);
		expect(state.languages.toArray()).toEqual(["en", "tr"]);
	});

	it("should remove unselected language", () => {
		const prevState = new Template({ languages: ["en", "tr"] });
		expect(prevState.languages.size).toEqual(2);

		const state: Template = reducer(prevState, {
			type: SET_LANGUAGES,
			payload: {
				language: "tr",
				isSelected: false
			}
		});

		expect(state.languages.size).toEqual(1);
		expect(state.languages.toArray()).toEqual(["en"]);
	});

	it("should remove primaryLanugage when languages is empty", () => {
		const prevState = new Template({ languages: ["en"], primaryLanugage: "en" });
		const state: Template = reducer(prevState, {
			type: SET_LANGUAGES,
			payload: {
				language: "en",
				isSelected: false
			}
		});

		expect(state.languages.size).toEqual(0);
		expect(state.primaryLanguage).toEqual("");
	});

	it("should set primary language if primary language is empty when new language selected", () => {
		const prevState = new Template({ languages: [], primaryLanguage: "" });
		const state: Template = reducer(prevState, {
			type: SET_LANGUAGES,
			payload: {
				language: "tr",
				isSelected: true
			}
		});

		expect(state.languages.size).toEqual(1);
		expect(state.primaryLanguage).toEqual("tr");
	});

	it("should set first language as primary language when primary lang removed", () => {
		const prevState = new Template({ languages: ["en", "tr"], primaryLanugage: "en" });

		const state: Template = reducer(prevState, {
			type: SET_LANGUAGES,
			payload: {
				language: "en",
				isSelected: false
			}
		});

		expect(state.languages.size).toEqual(1);
		expect(state.primaryLanguage).toEqual("tr");
	});

	it("should set primary language", () => {
		const state: Template = reducer(undefined, {
			type: SET_PRIMARY_LANGUAGE,
			payload: "fr"
		});

		expect(state.primaryLanguage).toEqual("fr");
	});

	it("should set product no option", () => {
		const prevState: Template = reducer(undefined, { type: INIT_TEMPLATE });
		expect(prevState.productNumberOption).toEqual("optional");

		const state = reducer(prevState, {
			type: SET_PRODUCT_NO_OPTION,
			payload: "must"
		});

		expect(state.productNumberOption).toEqual("must");
	});
});
