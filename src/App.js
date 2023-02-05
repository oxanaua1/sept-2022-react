import React, {useReducer} from 'react';

const App = () => {
//______________________________________________________________________________________________________________________
//useReducer для зберігання і змінювання даних як юзстейт
//в нього пеедається: перший параметр - ф-я редюсера, яка має набір дій і яка повертає стейт(в нас це reducer)
//                   другий параметр - його початкове зачення (в нас це null)
//                  триетій парамерт - ф-я яка сетає початкве значення(в нас це initValue),
//                                   в яку можна передавати {},[],0, це й буде state
//повертає масив двох параметрів [state, dispatch]. dispatch управляє state через ф-ю reducer
//______________________________________________________________________________________________________________________
//прописуємо дії, використовуємо dispatch, щоб змінити стейт. reducer приймає поточний state і дію - action
// reducer перевіряє на тип дії - action.type, якщо співпадає записує нове значення в стейт, якщо ні, виконуує той самий стейт

    const reducer = (state, action) => {
        switch (action.type) {
            case 'INC1':
                return {...state, count1: state.count1 + 1}
            case 'DEC1':
                return {...state, count1: state.count1 - 1}
            case 'INC2':
                return {...state, count2: state.count2 + 1}
            case 'DEC2':
                return {...state, count2: state.count2 - 1}
            case 'RESET':
                return {count1: action.payload, count2: action.payload}
            default:
                return {...state}
        }
    };
//______________________________________________________________________________________________________________________
//ця ф-я повертає пустий об'єкт, якщо б замість null, напр був об'єкт, то ця ф-я б приймала в дужках() його
//в цю функцію передаємо обєкт, як початкове значення ({},[],0, це й буде state)
    const initValue = () => (

        {count1: 0, count2: 0}
    )
//______________________________________________________________________________________________________________________
    const [state, dispatch] = useReducer(reducer, null, initValue);
//______________________________________________________________________________________________________________________

    return (
        <div>
            <div>Count1: {state.count1}</div>
            <button onClick={() => dispatch({type: 'INC1'})}>inc</button>
            <button onClick={() => dispatch({type: 'DEC1'})}>dec</button>
            <div>Count2: {state.count2}</div>
            <button onClick={() => dispatch({type: 'INC2'})}>inc</button>
            <button onClick={() => dispatch({type: 'DEC2'})}>dec</button>
            <hr/>
            <button onClick={() => dispatch({type: 'RESET', payload: 25})}>Reset</button>
        </div>
    );
};

export {App};