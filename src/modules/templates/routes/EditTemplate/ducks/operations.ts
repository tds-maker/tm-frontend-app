import actions from './actions'
import selectors from './selectors'
import IStore from '../../../../../store/IStore'

const sampleTemplate = {
	name: 'Wood Coating Template',
	languages: ['en', 'tr'],
	defaultLanguage: 'en',
	version: 'v0.1'
}

const { addToHistory, addToHistoryNext, addToHistoryPrev, selectElement } = actions

// #region HEADERS
const setHeaderStyle = (newStyle: object) => (dispatch: any, getState: any) => {
	const header = selectors.activeHeader(getState())!
	dispatch(actions.setHeaderStyle(newStyle, header._meta.page))
};

const changeHeaderStatus = (isEnabled: boolean) => (dispatch: any, getState: any) => {
	const page = selectors.activePage(getState())
	dispatch(actions.changeHeaderStatus(isEnabled, page._meta))
};
// #endregion

// #region FOOTERS
const setFooterStyle = (newStyle: object) => (dispatch: any, getState: any) => {
	const footer = selectors.activeFooter(getState())!
	dispatch(actions.setFooterStyle(newStyle, footer._meta.page))
};

const changeFooterStatus = (isEnabled: boolean) => (dispatch: any, getState: any) => {
	const page = selectors.activePage(getState())
	dispatch(actions.changeFooterStatus(isEnabled, page._meta))
};
// #endregion

// #region UNDO-REDO
const undo = () => (dispatch: any, getState: any) => {
	const currentState: IStore = getState()
	const prevState =
		currentState.template.editTemplate.history.prevStates[
			currentState.template.editTemplate.history.prevStates.length - 1
		]
	dispatch(actions.undo(prevState))
}

const redo = () => (dispatch: any, getState: any) => {
	const currentState: IStore = getState()
	const nextState = currentState.template.editTemplate.history.nextStates[0]
	dispatch(actions.redo(nextState))
}
// #endregion

// #region PAGES
const setPagePadding = (styles: any) => (dispatch: any, getState: any) => {
	const page = selectors.activePage(getState())
	dispatch(actions.setPagePadding(styles, page._meta))
};
// #endregion

// #region TEMPLATE
const fetchTempate = (id:string) => (dispatch:any) => {
	dispatch(actions.startFetchingTemplate());

	setTimeout(() => {
		dispatch(actions.initTemplate(sampleTemplate))
		dispatch(actions.endFetchingTemplate());
	}, 0);
}
// #endregion


export default {
	fetchTempate,
	setHeaderStyle,
	setFooterStyle,
	addToHistory,
	addToHistoryNext,
	addToHistoryPrev,
	setPagePadding,
	undo,
	redo,
	selectElement,
	changeHeaderStatus,
	changeFooterStatus,
}
