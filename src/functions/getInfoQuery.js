import store from "../redux/store";

export default function getInfoQuery(){
    return store.getState().infoQuery;
}