import React, {useEffect, useState} from 'react';
import {userService} from "../../services/userService";
import {User} from "../User/User";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        userService.getAll().then(value => value.data).then(value => setUsers([...value]))

    }, [])
    console.log(users);

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}

        </div>
    );
};
export {Users};