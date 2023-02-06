//6) підключаємо стор і йдемо в Users

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {App} from './App';
import {Provider} from "react-redux";
import {setUpStore} from "./redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = setUpStore();

root.render(
    <Provider store={store}>
        <App/>
    </Provider>

);
