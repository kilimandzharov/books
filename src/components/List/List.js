import React from 'react';
import './List.css';

function List(props) {
    return (
        <main className='content'>
            {props.children}
        </main>
    )
}
export default List