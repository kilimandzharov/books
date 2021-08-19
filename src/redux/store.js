import {configureStore} from '@reduxjs/toolkit';
import loadItemsReducer from "./slices/loadItemsSlice";
import infoQueryReducer from "./slices/infoQuerySlice";
import {createSelector} from 'reselect';
import detailedInfoReducer from "./slices/detailedInfoSlice";
import phaseReducer from "./slices/phaseSlice";

const itemSelector = createSelector(state => state.items, (items) => items);
const isEmpty = createSelector(state => state.infoQuery.isAnswerEmpty, result => result);
const phaseSelector=createSelector(state =>state.phase,result=>result);
const store = configureStore({
    reducer: {
        items: loadItemsReducer,
        infoQuery: infoQueryReducer,
        detailedInfo: detailedInfoReducer,
        phase: phaseReducer
    }
});

export default store;
export {itemSelector, isEmpty,phaseSelector};

