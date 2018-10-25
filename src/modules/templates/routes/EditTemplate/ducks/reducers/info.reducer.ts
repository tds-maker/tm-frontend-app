import { IInfoStore } from '../interfaces';
import IAction from "../../../../../../store/IAction";

const defaultInformationState: IInfoStore = {
    name : 'Wood Coating Template',
    languages: ['en', 'tr'],
    defaultLanguage : 'en',
    version: 'v0.1'
}
const informationReducer = (store = defaultInformationState, action: IAction): IInfoStore => {
    switch(action.type){
        default:
            return store;
    }
}

export default informationReducer;