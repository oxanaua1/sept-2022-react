import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";

import './index.css';
import {App} from './App';
import {setUpStore} from "./redux";
import {unstable_HistoryRouter as BrowserRouter} from "react-router-dom";
import {history} from "./services";


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = setUpStore();
root.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <App/>
        </BrowserRouter>

    </Provider>
);

