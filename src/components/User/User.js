import React from 'react';
import {useDispatch} from "react-redux";

import {userActions} from "../../redux";

const User = ({user}) => {
    const {id, name} = user;
    const dispatch = useDispatch();


    return (
        <div>
            <div>{id}. {name}</div>
            <hr/>
            <button onClick={() => dispatch(userActions.setSelectedUser(user))}>show selectedUser No {id}</button>
            <button onClick={() => dispatch(userActions.getById({id}))}>show user details No {id}</button>
        </div>
    );
};

export {User};