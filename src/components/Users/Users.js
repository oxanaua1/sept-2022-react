import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {userService} from "../../services";
import {userActions} from "../../redux";
import {User} from "../User/User";

//useDispatch-потрібно щось зробити зі стейтом використати useDispatch і описати в слайсі що я маю зробити
//useSelector - потрібно щось дістати


const Users = () => {

//7) через хук useDispatch повертаємо dispatch, в який передаватимемо action, який є в userSlice->userActions->getAll
    const dispatch = useDispatch();

//8) для отримання даних зі стору(файл store.js) - useSelector, в якому міститься весь state з юзерами, постатми тощо
    //const rootReducer = combineReducers({users: userReducer}); по суті буду звертатися до свого userReducer
    //і отримав весь обєкт const initialState (файл userSlice.js)

    const {users, errors, loading} = useSelector(state => state.users);

    useEffect(() => {
        //13) userService.getAll().then(({data}) => dispatch(userActions.getAll(data)))
        dispatch(userActions.getAll())

    }, [])

    return (
        <div>
            {errors && JSON.stringify(errors)}
            {loading && <h1>Loading..............................</h1>}
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};