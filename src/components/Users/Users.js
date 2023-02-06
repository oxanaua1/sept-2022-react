import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {userService} from "../../services";
import {userActions} from "../../redux";
import {User} from "../User/User";

//useDispatch-потрібно щось зробити зі стейтом використ useDispatch і описати в слайсі що я маю зробити
//useSelector - потрібно щось дістати


const Users = () => {

//7) через хук useDispatch повертаємо dispatch, в який передаватимемо action, який є в userSlice->userActions->getAll
    const dispatch = useDispatch();

//8) для отримання даних зі стору(файл store.js) - useSelector, в якому міститься весь state з юзерами, постатми тощо
    //const rootReducer = combineReducers({users: userReducer}); по суті буду звертатися до свого userReducer
    //і отримав весь обєкт const initialState (файл userSlice.js)

    const {users} = useSelector(state => state.users);

    useEffect(() => {
        userService.getAll().then(({data}) => dispatch(userActions.getAll(data)))

    }, [])

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};