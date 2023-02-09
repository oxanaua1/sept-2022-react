import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReducer} from "./slices";


const rootReducer = combineReducers({
    cars: carReducer,


});

const setUpStore = () => configureStore({
    reducer: rootReducer
});

export {
    setUpStore
}

