import actions from './actions';
import selectors from './selectors';
import IStore from '../../../../../store/IStore';

const {addToHistory, addToHistoryNext, addToHistoryPrev, selectElement } = actions;

const setHeaderStyle = (newStyle: object) => (dispatch:any, getState: any) => {
    const header = selectors.activeHeader(getState())!;
    dispatch(actions.setHeaderStyle(newStyle, header._meta.page));
}
const setFooterStyle = (newStyle: object) => (dispatch:any, getState: any) => {
    const footer = selectors.activeFooter(getState())!;
    dispatch(actions.setFooterStyle(newStyle, footer._meta.page));
}

const undo = () => (dispatch: any, getState:any) => {
    const currentState:IStore = getState();
    const prevState = currentState.template.editTemplate.history.prevStates[currentState.template.editTemplate.history.prevStates.length - 1];
    dispatch(actions.undo(prevState));
}

const redo = () => (dispatch: any, getState:any) => {
    const currentState:IStore = getState();
    const nextState = currentState.template.editTemplate.history.nextStates[0];
    dispatch(actions.redo(nextState));
}

// const setPagePadding = (value:number, position: string) => (dispatch: any, getState:any) => {
//     const page = selectors.activePage(getState());
//     dispatch(actions.setPagePadding(value, position, page._meta));
// }

const setPagePadding = (styles: any) => (dispatch: any, getState:any) => {
    const page = selectors.activePage(getState());
    dispatch(actions.setPagePadding(styles, page._meta));
}

const changeHeaderStatus = (isEnabled: boolean) => (dispatch:any, getState:any) =>{
    const page = selectors.activePage(getState());
    dispatch(actions.changeHeaderStatus(isEnabled, page._meta));
}

const changeFooterStatus = (isEnabled: boolean) => (dispatch:any, getState:any) =>{
    const page = selectors.activePage(getState());
    dispatch(actions.changeFooterStatus(isEnabled, page._meta));
}

export default {
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
    changeFooterStatus
};
