import {createSlice} from '@reduxjs/toolkit';

const initialState='idle';
const phaseSlice=createSlice({
    name:'phase',
    initialState,
    reducers:{
        setLoading(state,action){
            state='loading';
            return state
        },
        setError(state,action){
            state='error';
            return state
        },
        setActive(state,action){
            state='active';
            return state
        }
    }
});

const phaseReducer=phaseSlice.reducer;

export default phaseReducer;

export const {setLoading:setLoadingAction,setError:setErrorAction,setActive:setActiveAction}=phaseSlice.actions;


