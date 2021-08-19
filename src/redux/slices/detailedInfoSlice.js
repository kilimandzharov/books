import {createSlice} from "@reduxjs/toolkit";
import {createSelector} from 'reselect';

const detailedInfoSelector=createSelector(state=>state.detailedInfo,result=>result);

const initialState=null;
const detailedInfoSlice=createSlice({
    name:'detailedInfo',
    initialState,
    reducers:{
       loadSingleItem(state,action){
           return action.payload
       }
    }
});

const detailedInfoReducer=detailedInfoSlice.reducer;
export const {loadSingleItem:loadSingleItemAction}=detailedInfoSlice.actions;
export default detailedInfoReducer;
export {detailedInfoSelector};