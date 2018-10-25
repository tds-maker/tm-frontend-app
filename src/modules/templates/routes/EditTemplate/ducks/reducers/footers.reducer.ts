import types from '../types';
import { IFooterStore } from '../interfaces';
import IAction from "../../../../../../store/IAction";

const defaultFooterState: IFooterStore = {
    0: {
        _meta: {
            page: 0
        },
        style : {
            height: "100px",
            overflow: 'hidden',
            position: 'relative'
        }
    }
}

const footersReducer = (state = defaultFooterState, action: IAction): IFooterStore => {
    switch(action.type){
        case types.CHANGE_FOOTER_STYLE:
            return {
                ...state,
                [action.payload.page] : {
                    ...state[action.payload.page],
                    style: action.payload.style
                }
            };
        case types.UNDO:
        case types.REDO:
            return JSON.parse(JSON.stringify(action.payload.footers));
        default:
            return state;
    }
}

export default footersReducer;