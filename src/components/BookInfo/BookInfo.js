import React from 'react';
import './BookInfo.css';
import {useSelector, useDispatch} from "react-redux";
import getSingleFetch from "../../redux/getSingleFetch";
import {detailedInfoSelector} from "../../redux/slices/detailedInfoSlice";
import getInfoQuery from "../../functions/getInfoQuery";
import {phaseSelector} from "../../redux/store";
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";
import {useHistory,useLocation} from "react-router-dom";

function BookInfo(props) {
    const path= useLocation().pathname.split("/");
    const id = path[path.length-1];
    console.log(id);
    const info = useSelector(detailedInfoSelector);
    const dispatch = useDispatch();
    console.log("render BookInfo");
    const phase = useSelector(phaseSelector);
    const history = useHistory();
    React.useEffect(() => {
        const fetching = getSingleFetch(id);
        dispatch(fetching);
    }, []);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return (
        phase === 'active' ?
            <div className='book-info-container'>
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
            </div> : phase === 'loading'? < Spinner/> : phase === "error" ? <Error/>:null
    )
}

export default BookInfo