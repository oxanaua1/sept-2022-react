import React, {useReducer, useRef} from 'react';

import {Cats} from "./components/Cats";
import {Dogs} from "./components/Dogs";


const reducer = (state, action) => {
    switch (action.type) {
        case'addCat':
            const [lastCat] = state.cats.slice(-1);
            const idCat = lastCat ? lastCat.id + 1 : 1;
            return {
                ...state,
                cats: [...state.cats, {id: idCat, name: action.payload}]
            }
        case 'deleteCat':
            const index = state.cats.findIndex(cat => cat.id === action.payload);
            state.cats.splice(index, 1)
            return {...state}
        case 'addDog':
            const [lastDog] = state.dogs.slice(-1);
            const idDog = lastDog ? lastDog.id + 1 : 1;
            return {
                ...state,
                dogs: [...state.dogs, {id: idDog, name: action.payload}]
            }
        case 'deleteDog':
            const indexDog = state.dogs.findIndex(dog => dog.id === action.payload);
            state.dogs.splice(indexDog, 1)
            return {...state}

        default:
            return {...state}
    }


};

const App = () => {


    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []}, (data) => data);

    const catInp = useRef();
    const dogInp = useRef();


    const createCat = () => {
        dispatch({type: 'addCat', payload: catInp.current.value})
        catInp.current.value = ''
    };

    const createDog = () => {
        dispatch({type: 'addDog', payload: dogInp.current.value})
        dogInp.current.value = ''

    };

    return (
        <div>

            <div>
                <input type="text" name={'cat'} ref={catInp}/>
                <button onClick={createCat}>create cat</button>

                <Cats cats={state.cats} dispatch={dispatch}/>
            </div>

            <div>
                <input type="text" name={'dog'} ref={dogInp}/>
                <button onClick={createDog}>create dog</button>

                <Dogs dogs={state.dogs} dispatch={dispatch}/>
            </div>

        </div>
    );
};

export {App};