import types from './types';
import IAction from '../../../../../store/IAction';

// #region HEADERS
const setHeaderStyle = (style:object, page: number): IAction => ({
    type: types.CHANGE_HEADER_STYLE,
    payload : {
        style,
        page
    },
    hasAudit : true
})

const changeHeaderStatus =(isEnabled: boolean, pageMeta: any): IAction => ({
    type: types.ENABLE_DISABLE_HEADER,
    payload : {
        isEnabled,
        pageMeta
    },
    hasAudit: true
})
// #endregion

// #region FOOTERS
const setFooterStyle = (style:object, page: number): IAction => ({
    type: types.CHANGE_FOOTER_STYLE,
    payload : {
        style,
        page
    },
    hasAudit : true
})

const changeFooterStatus =(isEnabled: boolean, pageMeta: any): IAction => ({
    type: types.ENABLE_DISABLE_FOOTER,
    payload : {
        isEnabled,
        pageMeta
    },
    hasAudit: true
})

// #endregion

// #region UNDO-REDO
const addToHistory = (data:any): IAction => ({
    type: types.ADD_TO_HISTORY,
    payload: data
})

const addToHistoryNext = (data:any): IAction => ({
    type: types.ADD_TO_HISTORY_NEXT,
    payload: data
})

const addToHistoryPrev = (data:any): IAction => ({
    type: types.ADD_TO_HISTORY_PREV,
    payload: data
})

const undo = (data:any): IAction => ({
    type: types.UNDO,
    payload: data
})

const redo = (data:any): IAction => ({
    type: types.REDO,
    payload: data
})
// #endregion

// #region PAGES
const setPagePadding = (styles: any, pageMeta: any): IAction => ({
    type: types.CHANGE_PAGE_MARGIN,
    payload : {
        styles,
        pageMeta
    },
    hasAudit : true
})

// #endregion

// #region ELEMENT
const selectElement = (el: any, options:any):IAction => ({
    type: types.SELECT_ELEMENT,
    payload: {
        el,
        options,
    },
    hasAudit: false
})
// #endregion

export default {
    changeHeaderStatus,
    setHeaderStyle,
    changeFooterStatus,
    setFooterStyle,
    addToHistory,
    addToHistoryNext,
    addToHistoryPrev,
    setPagePadding,
    undo,
    redo,
    selectElement
}