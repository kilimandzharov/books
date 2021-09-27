import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import store from "./redux/store";
import {persistor} from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
            </PersistGate>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

