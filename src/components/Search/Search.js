import React from 'react';
import './Search.css';
import {getFetchItems} from "../../redux/getFetchItems";
import {useDispatch} from "react-redux";
import {
    setCategoryAction,
    setIsAnswerEmptyAction,
    setSearchStringAction,
    setSortByAction
} from "../../redux/slices/infoQuerySlice";
import getInfoQuery from "../../functions/getInfoQuery";


function Search(props) {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState('')

    function handleSubmit(event) {
        event.preventDefault();
        window.localStorage.setItem('scroll','0');
        console.log(window.localStorage);
        if (props.route !== 'cards') {
            setImmediate(() => props.setRoute('cards'));
        }
        if (getInfoQuery().searchString.length) {
            const categoryElement = document.querySelector('.categories');
            const sortElement = document.querySelector('.sortings');
            sortElement.value = 'relevance';
            categoryElement.value = 'all';
            dispatch(setCategoryAction('all'));
            dispatch(setSortByAction('relevance'));
        }
        if(getInfoQuery().isAnswerEmpty){
            dispatch(setIsAnswerEmptyAction());
        }
        dispatch(setSearchStringAction(value));
        const {sortBy, category} = getInfoQuery();
        const fetchingFunction = getFetchItems(value, sortBy, 0, category);
        dispatch(fetchingFunction);
    }

    return (
        <header className='search'>
            <h1>Search Books</h1>
            <div className='search-container'>
                <form onSubmit={handleSubmit}>
                    <input type='text' onChange={(event) => {
                        setValue(event.target.value);
                    }} value={value}/>
                    <input type='submit' value='Search' id='submit'/>
                </form>
                <div>
                    <span>Categories:</span>
                    <select className='categories' onChange={(event) => {
                        if (props.route !== 'cards') {
                            setImmediate(() => props.setRoute('cards'));
                        }
                        window.localStorage.setItem('scroll','0');
                        dispatch(setCategoryAction(event.target.value));
                        const {searchString, sortBy, category} = getInfoQuery();
                        if (searchString.length) {
                            const fetchingFunction = getFetchItems(searchString, sortBy, 0, category);
                            if(getInfoQuery().isAnswerEmpty){
                                dispatch(setIsAnswerEmptyAction());
                            }

                            dispatch(fetchingFunction);
                        }


                    }}>
                        <option>all</option>
                        <option>art</option>
                        <option>biography</option>
                        <option>computers</option>
                        <option>history</option>
                        <option>medical</option>
                        <option>poetry</option>
                    </select>
                </div>
                <div>
                    <span>Sort by:</span>
                    <select className='sortings' onChange={(event) => {
                        if (props.route !== 'cards') {
                            setImmediate(() => props.setRoute('cards'));
                        }
                        window.localStorage.setItem('scroll','0');
                        dispatch(setSortByAction(event.target.value));
                        const {searchString, sortBy, category} = getInfoQuery();
                        if (searchString.length) {
                            const fetchingFunction = getFetchItems(searchString, sortBy, 0, category);
                            if(getInfoQuery().isAnswerEmpty){
                                dispatch(setIsAnswerEmptyAction());
                            }
                            dispatch(fetchingFunction);
                        }
                    }}>
                        <option>relevance</option>
                        <option>newest</option>
                    </select>
                </div>
            </div>
        </header>

    )

}

export default Search