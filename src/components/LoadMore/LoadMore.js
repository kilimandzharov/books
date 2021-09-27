import React from 'react';
import './LoadMore.css';
import store, { isEmpty} from "../../redux/store";
import getInfoQuery from "../../functions/getInfoQuery";
import {getFetchItems} from "../../redux/getFetchItems";
import {useDispatch, useSelector} from "react-redux";

function LoadMore(props) {
    const dispatch = useDispatch();
    const empty = useSelector(isEmpty);

    return (
        !empty &&
        <button className='loadmore' onClick={() => {
            console.log(store.getState().items.length);
            const {searchString, sortBy, category} = getInfoQuery();
            const fetchingFunction = getFetchItems(searchString, sortBy, store.getState().items.length, category);
            dispatch(fetchingFunction);
        }}>Load More</button>
    )
}

export default LoadMore;