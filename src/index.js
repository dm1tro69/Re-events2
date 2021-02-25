import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'
import 'semantic-ui-css/semantic.min.css'
import './app/layout/style.css'
import App from './app/layout/App.jsx';
import reportWebVitals from './reportWebVitals';
import configureStore from "./app/store/configureStore";
import ScrollToTop from "./app/layout/ScrollToTop";

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ScrollToTop/>
            <App />
        </BrowserRouter>
    </Provider>

    , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
