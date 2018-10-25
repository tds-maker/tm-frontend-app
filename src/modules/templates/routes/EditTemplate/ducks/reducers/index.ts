import { combineReducers } from 'redux';
import informationReducer from './info.reducer';
import optionsReducer from './options.reducer';
import pagesReducer from './pages.reducer';
import bodiesReducer from './bodies.reducer';
import headersReducer from './headers.reducer';
import footersReducer from './footers.reducer';
import historyReducer from './history.reducer';
import elementsReducer from './elements.reducer';

const reducer = combineReducers({
    info : informationReducer,
    options: optionsReducer,
    design : combineReducers({
        pages: pagesReducer,
        bodies: bodiesReducer,
        headers: headersReducer,
        footers: footersReducer,
        elements: elementsReducer
    }),
    history: historyReducer
})

export default reducer;