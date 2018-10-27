import actions from './actions';
import types from './types';
import infoReducer from './reducers/info.reducer';
import optionsReducer from './reducers/options.reducer';
import IAction from '../../../../../store/IAction';
import { defaultOptionsState, defaultPageState } from './reducers/defaults';
import pagesReducers from './reducers/pages.reducer';
import '../../../../../utils/string.prototypes';

describe('Edit template tests', () => {
    describe('Actions', () => {
        describe('Template', () => {
            it('should create start fetching action', () => {
                const action:IAction = {
                    type: types.START_FETCHING_TEMPLATE
                };
                expect(actions.startFetchingTemplate()).toEqual(action);
            })

            it('should create end fetching action', () => {
                const action:IAction = {
                    type: types.END_FETCHING_TEMPLATE
                };
                expect(actions.endFetchingTemplate()).toEqual(action);
            })

            it('should create init template action', () => {
                const action: IAction = {
                    type: types.INIT_EDIT_TEMPLATE,
                    payload : 'fake-template'
                }
                expect(actions.initTemplate('fake-template')).toEqual(action)
            })
        })

        describe('Page', () => {
            it('should create Change Page Margin action', () => {
                const action:IAction = {
                    type: types.CHANGE_PAGE_MARGIN,
                    payload : {
                        pageMeta : 'fake-meta',
                        styles: 'fake-style'
                    },
                    hasAudit: true
                }

                expect(actions.setPagePadding('fake-style', 'fake-meta')).toEqual(action);
            })
        })

        describe('Page Header', () => {
            it('should create Set Header Style action', () => {
                const style = { height: "5px"};
                const action: IAction = {
                    type: types.CHANGE_HEADER_STYLE,
                    payload : {
                        page : 1,
                        style
                    },
                    hasAudit: true
                }
                expect(actions.setHeaderStyle(style, 1)).toEqual(action);
            })
    
            it('should create Change Header Status action', () => {
                const action: IAction = {
                    type: types.ENABLE_DISABLE_HEADER,
                    payload: {
                        isEnabled : true,
                        pageMeta: 'fake-meta'
                    },
                    hasAudit : true
                }
                expect(actions.changeHeaderStatus(true, 'fake-meta')).toEqual(action);
            })
        })

        describe('Page Footer', () => {
            it('should create Set Footer Style action', () => {
                const style = { height: "5px"};
                const action: IAction = {
                    type: types.CHANGE_FOOTER_STYLE,
                    payload : {
                        page : 1,
                        style
                    },
                    hasAudit: true
                }
                expect(actions.setFooterStyle(style, 1)).toEqual(action);
            })

            it('should create Change Footer Status action', () => {
                const action: IAction = {
                    type: types.ENABLE_DISABLE_FOOTER,
                    payload: {
                        isEnabled : true,
                        pageMeta: 'fake-meta'
                    },
                    hasAudit : true
                }
                expect(actions.changeFooterStatus(true, 'fake-meta')).toEqual(action);
            })
        })

        describe('Undo Redo', () => {
            it('should create add to history action', () => {
                const action: IAction = {
                    type: types.ADD_TO_HISTORY,
                    payload: 'fake-data'
                }
                expect(actions.addToHistory('fake-data')).toEqual(action);
            })

            it('should create add to history next action', () => {
                const action: IAction = {
                    type: types.ADD_TO_HISTORY_NEXT,
                    payload: 'fake-data'
                }
                expect(actions.addToHistoryNext('fake-data')).toEqual(action);
            })

            it('should create add to history prev action', () => {
                const action: IAction = {
                    type: types.ADD_TO_HISTORY_PREV,
                    payload: 'fake-data'
                }
                expect(actions.addToHistoryPrev('fake-data')).toEqual(action);
            })

            it('should create undo action', () => {
                const action: IAction = {
                    type: types.UNDO,
                    payload: 'fake-data'
                }
                expect(actions.undo('fake-data')).toEqual(action);
            })

            it('should create redo action', () => {
                const action: IAction = {
                    type: types.REDO,
                    payload: 'fake-data'
                }
                expect(actions.redo('fake-data')).toEqual(action);
            })
        })

        describe('Element', () => {
            it('should create Select Element action', () => {
                const action:IAction = {
                    type: types.SELECT_ELEMENT,
                    payload : {
                        el : 'fake-element',
                        options: 'fake-options'
                    },
                    hasAudit: false
                }

                expect(actions.selectElement('fake-element', 'fake-options')).toEqual(action);
            })
        })
    })

    describe('Reducers', () => {
        describe('Info', () => {
            it('should init edit tempate', () => {
                const data = {
                    languages: ['tr', 'en'],
                    defaultLanguage : 'tr',
                    name: 'fake-template',
                    version : 'v1.0'
                };
                const action: IAction = {
                    type: types.INIT_EDIT_TEMPLATE,
                    payload: data
                }
                expect(infoReducer(undefined, action)).toEqual(data);
            })
        })

        describe('Options', () => {
            it('should select element', () => {
                const action:IAction = {
                    type: types.SELECT_ELEMENT,
                    payload: {
                        options : { type : 'fake-element'}
                    }
                }

                expect(defaultOptionsState.activeToolbar).toEqual('text');
                const nextState = optionsReducer(undefined, action);
                expect(nextState).not.toEqual(defaultOptionsState);
                expect(nextState.activeToolbar).toEqual('fake-element');
                
            })
        })

        describe('Pages', () => {
            it('should set page margin', () => {
                const action:IAction = {
                    type: types.CHANGE_PAGE_MARGIN,
                    payload: {
                        pageMeta: { pageNo: 1},
                        styles : { marginTop: "1px", marginRight: "2px", marginBottom: '3px', marginLeft: '4px'}
                    }
                }

                expect(defaultPageState[1]._meta.margin).toEqual({
                    top: 40, left: 40, right: 40, bottom: 40
                });

                const newState = pagesReducers(undefined, action);
                expect(newState).not.toEqual(defaultPageState);
                expect(newState[1]._meta.margin).toEqual({
                    top: 1, right: 2, bottom: 3, left: 4
                })
            })

            it('should enable/disable header', () => {
                const action:IAction = {
                    type: types.ENABLE_DISABLE_HEADER,
                    payload: {
                        isEnabled: false,
                        pageMeta : { pageNo : 1}
                    }
                }

                expect(defaultPageState[1]._meta.hasHeader).toBeTruthy();

                // Disable
                const state_1 = pagesReducers(undefined, action);
                expect(state_1).not.toEqual(defaultPageState);
                expect(state_1[1]._meta.hasHeader).toBeFalsy();

                // Enable
                action.payload.isEnabled = true;
                const state_2 = pagesReducers(state_1, action);
                expect(state_2).not.toEqual(state_1);
                expect(state_2[1]._meta.hasHeader).toBeTruthy();
            })

            it('should enable/disable footer', () => {
                const action:IAction = {
                    type: types.ENABLE_DISABLE_FOOTER,
                    payload: {
                        isEnabled: false,
                        pageMeta : { pageNo : 1}
                    }
                }

                expect(defaultPageState[1]._meta.hasFooter).toBeTruthy();

                // Disable
                const state_1 = pagesReducers(undefined, action);
                expect(state_1).not.toEqual(defaultPageState);
                expect(state_1[1]._meta.hasFooter).toBeFalsy();

                // Enable
                action.payload.isEnabled = true;
                const state_2 = pagesReducers(state_1, action);
                expect(state_2).not.toEqual(state_1);
                expect(state_2[1]._meta.hasFooter).toBeTruthy();
            })
        })
    })
})