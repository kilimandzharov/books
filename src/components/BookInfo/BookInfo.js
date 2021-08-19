import React from 'react';
import './BookInfo.css';
import {useSelector, useDispatch} from "react-redux";
import getSingleFetch from "../../redux/getSingleFetch";
import {detailedInfoSelector} from "../../redux/slices/detailedInfoSlice";
import getInfoQuery from "../../functions/getInfoQuery";
import {phaseSelector} from "../../redux/store";
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";

function BookInfo(props) {
    const info = useSelector(detailedInfoSelector);
    const dispatch = useDispatch();
    const phase = useSelector(phaseSelector);
    React.useEffect(() => {
        const fetching = getSingleFetch(getInfoQuery().bookId);
        dispatch(fetching);
    }, []);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return (
        phase === 'active' ?
            <div className='book-info-container'>
                <button className='book-button' onClick={() => props.setRoute('cards')}><img
                    src="https://img.icons8.com/ios/50/000000/back--v1.png"/></button>
                <div className='book-page'>

                    <img
                        src={info ? info.source : 'https://pitomnik1.ru/wp-content/uploads/2014/02/pustaya-kartinka.png'}/>
                    <div className='book-page-info'>
                        <div className='title'>{info?.title}</div>
                        <div className='authors'>{info?.authors?.join(', ')}</div>
                        <div className='categories'>{info?.categories}</div>
                        <div className='description'>{info?.description}</div>

                    </div>
                </div>
            </div> : phase === 'loading'? < Spinner/> : <Error/>
    )
}

export default BookInfo