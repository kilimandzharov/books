import React from 'react';
import './App.css';
import Search from "../Search/Search";

import Content from "../Content/Content";
import BookInfo from "../BookInfo/BookInfo";



function App() {
    const [route, setRoute] = React.useState('cards');

    return (
        <>
        <Search route={route} setRoute={setRoute} />
    {route === 'cards' ?
        <Content setRoute={setRoute} />: <BookInfo setRoute={setRoute}/>}
        </>
    );


}

export default App;
