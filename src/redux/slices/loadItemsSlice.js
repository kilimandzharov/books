import {createSlice} from '@reduxjs/toolkit';

const initialState=[];
const loadItemsSlice=createSlice({
    name:'load',
    initialState,
    reducers:{
        loadItems(state,action){
            return action.payload
        },
        addItems(state,action){
            return state.concat(action.payload);
        }

    }
});

const loadItemsReducer=loadItemsSlice.reducer;

export default loadItemsReducer;
export const {loadItems:loadItemsAction,addItems:addItemsAction}=loadItemsSlice.actions;
