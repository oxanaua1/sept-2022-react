import React from 'react';
import {useSelector} from "react-redux";

const Header = () => {
    //10) мій state => state.users) береться з const rootReducer = combineReducers({users: userReducer}); по суті буду звертатися до свого userReducer

    const {selectedUser} = useSelector(state => state.users);
    return (
        <div>
            <h3>{selectedUser && selectedUser.name}</h3>
            <hr/>
        </div>
    );
};

export {Header};