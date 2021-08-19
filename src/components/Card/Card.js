import React from 'react';
import './Card.css';
import {useDispatch} from "react-redux";
import {setBookIdAction} from "../../redux/slices/infoQuerySlice";
import {setLoadingAction} from "../../redux/slices/phaseSlice";

const Card = React.memo((props) => {
    const dispatch=useDispatch();
    function handleClick() {
        dispatch(setBookIdAction(props.id));
        dispatch(setLoadingAction());
        props.setRoute('info');
    }

    return (
        <div className='card' onClick={handleClick}>

            <img
                src={props.source ? props.source : 'https://pitomnik1.ru/wp-content/uploads/2014/02/pustaya-kartinka.png'}/>
            <div>
                <div className='group'>
                    {props.category ? props.category[0] : null}
                </div>
                <div className='title'>
                    {props.title.length > 70 ? props.title.slice(0, 71) + '...' : props.title}
                </div>
                <div className='author'>
                    {props.authors ? props.authors.join(' ').length > 50 ? props.authors[0] : props.authors.join(', ') : null}
                </div>
            </div>
        </div>
    )
})

export default Card