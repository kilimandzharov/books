import React from 'react';
import './App.css';
import Search from "../Search/Search";
import {Switch, Route,Redirect} from "react-router-dom";
import Content from "../Content/Content";
import BookInfo from "../BookInfo/BookInfo";


function App() {
    return (

        <Switch>
            <Route path="/home/:id">
                <BookInfo/>
            </Route>

            <Route path='/home'>
                <Search/>
                <Content/>
            </Route>
            <Redirect from="/" to="/home"/>
        </Switch>
    );


}

export default App;
