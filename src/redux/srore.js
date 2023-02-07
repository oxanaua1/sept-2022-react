//4) тут зберігаємо всі слайси

import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer} from "./slices";


//для пакування слайсів в стор використовуємо combineReducers
const rootReducer = combineReducers({
    users: userReducer
});

// створюємо сам стор(setUpStore), що є ф-єю для зручності його типізації за доп configureStore
const setUpStore = () => configureStore({
    reducer: rootReducer
})

export {
    setUpStore
}

//5) go to scr/index.js