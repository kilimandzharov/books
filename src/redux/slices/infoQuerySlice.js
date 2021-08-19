import {createSlice} from "@reduxjs/toolkit";



const initialState = {
    searchString: '',
    sortBy: 'relevance',
    category: null,
    bookId: null,
    totalItems:null,
    isAnswerEmpty:false
}

const infoQuerySlice = createSlice({
    name: 'infoQuery',
    initialState,
    reducers: {
        setSearchString(state, action) {
            state.searchString = action.payload;
            return state
        },
        setSortBy(state, action) {
            state.sortBy = action.payload;
            return state
        },
        setCategory(state, action) {
            state.category = action.payload;
            return state
        },
        setBookId(state, action) {
            state.bookId = action.payload;
            return state
        },
        setTotalItems(state,action){
            state.totalItems=action.payload;
            return state;
        },
        setIsAnswerEmpty(state,action){
            state.isAnswerEmpty=!state.isAnswerEmpty;
            return state
        }
    }
});

const infoQueryReducer = infoQuerySlice.reducer;

export const {setSearchString: setSearchStringAction, setSortBy: setSortByAction, setCategory: setCategoryAction,
    setBookId: setBookIdAction, setTotalItems:setTotalItemsAction,setIsAnswerEmpty:setIsAnswerEmptyAction} = infoQuerySlice.actions
export default infoQueryReducer;