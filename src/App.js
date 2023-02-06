import React, {useReducer} from 'react';
import {UserForm} from "./components/UserForm";
import {ACTION_TYPES} from "./components/userTypes";
import {Users} from "./components/Users";


const reducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_USER:
            const [last] = state.users.slice(-1);
            const userId = last ? last.id + 1 : 1;

            return {
                ...state,
                users: [...state.users, {id: userId, name: action.payload.name, age: action.payload.age}]
            }


        default:
            return {...state}
    }

}

const App = () => {

    const init = () => (
        [{name: '', age: ''}]

    )


    const {state, dispatch} = useReducer(reducer, [{}], init);
    console.log(state);
    return (


        <div>
            <UserForm users={state} dispatch={dispatch}/>
            <Users users={state}/>
        </div>
    );
};

export {App};

