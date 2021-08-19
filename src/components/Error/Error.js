import React from 'react';
import './Error.css';

function Error() {
    return (
        <>

            <div className='error'>
                <img src="https://img.icons8.com/emoji/100/000000/cross-mark-button-emoji.png"/>
                <div>
                    Что-то пошло не так, попробуйте еще раз
                </div>
            </div>
        </>
    )
}

export default Error