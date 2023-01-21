import React, {useEffect, useState} from 'react';
import {userService} from "../../services/userService";

import {User} from "../User/User";
import {UserDetails} from "../UserDetails/UserDetails";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);


    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => setUsers([...value]))

    }, [])


    const onShowUserDetails = (userId) => {
        userService.getById(userId).then(value => value.data).then(value => setUser(value))
    }


    const onClearUserDetails = (userId) => {
        if (user) {
            setUser(null)
        }

    }


    return (
        <div>
            <div>
                {!!users.length && users.map(user =>
                    <User key={user.id} user={user}
                          onShowUserDetails={onShowUserDetails}/>)}
            </div>

            <hr/>

            <div>
                {!!user && <UserDetails user={user}
                                        onClearUserDetails={onClearUserDetails}/>}
            </div>

        </div>


    );


};
export {Users};