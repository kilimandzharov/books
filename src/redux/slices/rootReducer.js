import loadItemsReducer from "./loadItemsSlice";
import infoQueryReducer from "./infoQuerySlice";
import detailedInfoReducer from "./detailedInfoSlice";
import phaseReducer from "./phaseSlice";
import {combineReducers} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    items: loadItemsReducer,
    infoQuery: infoQueryReducer,
    detailedInfo: detailedInfoReducer,
    phase: phaseReducer
});

export default rootReducer