import React from 'react';
import {useDispatch} from "react-redux";
import {userActions} from "../../redux";

const User = ({user}) => {
//9 створюю dispatch для selectedUser і ф-ю setSelectedUser в userSlice.js
//в кнопку передаю dispatch з екшеном зі слайсу, а пейлоудом буде user і йду в Header.js

    const {id, name, username} = user;
    const dispatch = useDispatch();

    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>
            <button onClick={() => dispatch((userActions.setSelectedUser(user)))}>select</button>
            <button onClick={() => dispatch(userActions.getById({id}))}>apiSelect</button>

        </div>
    );
};

export {User};