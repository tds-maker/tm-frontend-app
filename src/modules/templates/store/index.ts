import { combineReducers } from 'redux';
import editTemplateReducer from '../routes/EditTemplate/ducks';


const reducer = combineReducers({
    editTemplate: editTemplateReducer
})

export default reducer;
