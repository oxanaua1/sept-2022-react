import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


export const MyContext = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
        <MyContext.Provider value={{name:'Max, age:15'}}>

            <BrowserRouter>
            <App/>
        </BrowserRouter>

        </MyContext.Provider>





    </React.StrictMode>
);


