import React, {useEffect, useState} from 'react';

import {userService} from "../../services";
import {User} from "../User/User";


const Users = ({setUserId}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => value.data).then(users => setUsers([...users]))
    }, [])

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user} setUserId={setUserId}/>)

            }


        </div>
    );
};

export {Users};