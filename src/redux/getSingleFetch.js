import {loadSingleItemAction} from "./slices/detailedInfoSlice";
import {setActiveAction, setErrorAction, setLoadingAction} from "./slices/phaseSlice";

export default function getSingleFetch(id){
   const URL=`https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyDIeff66FZsalq2uE173hlTCBiy8tbDrp4`;
   return function fetchSingle(dispatch,getState){
       fetch(URL).then(response=>response.json()).then(result=>({
           title:result.volumeInfo.title,
           authors:result.volumeInfo.authors,
           description:result.volumeInfo.description,
           categories:result.volumeInfo.categories,
           source:result.volumeInfo.imageLinks.thumbnail
       })).then(result=>dispatch(loadSingleItemAction(result))).then(result=>dispatch(setActiveAction())).catch(error=>{
           dispatch(setErrorAction());
       });
   }
}