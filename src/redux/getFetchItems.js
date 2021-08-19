import {addItemsAction, loadItemsAction} from "./slices/loadItemsSlice";
import {setIsAnswerEmptyAction, setTotalItemsAction} from "./slices/infoQuerySlice";
import {setActiveAction, setErrorAction, setLoadingAction} from "./slices/phaseSlice";

export function getFetchItems(searchString, sortBy, startIndex, category) {
    let URL = `https://www.googleapis.com/books/v1/volumes?q=${searchString}${category ? '+subject:' + category : ''}
    &orderBy=${sortBy}&maxResults=30&startIndex=${startIndex}&key=AIzaSyDIeff66FZsalq2uE173hlTCBiy8tbDrp4`;
    return function fetchBooks(dispatch, getState) {

        if(!startIndex){
            dispatch(setLoadingAction());
        }
        fetch(URL)
            .then((response) => response.json())
            .then(result => {
                if (!startIndex) {
                    dispatch(setTotalItemsAction(result.totalItems))
                }
                return result
            })
            .then((result) => {

                    result = result.items.map(item => ({
                        title: item.volumeInfo.title,
                        authors: item.volumeInfo.authors,
                        category: item.volumeInfo.categories,
                        image: item.volumeInfo?.imageLinks?.thumbnail,
                        description: item.volumeInfo.description,
                        id: item.id
                    }));
                    if(!result.items && result.totalItems){
                        dispatch(setIsAnswerEmptyAction());
                    }
                    if (!startIndex) {
                        dispatch(loadItemsAction(result));
                    } else {
                        dispatch(addItemsAction(result));
                    }

                if(!startIndex){
                    dispatch(setActiveAction());
                }

            }).catch(error=>dispatch(setErrorAction()));
    }
}
