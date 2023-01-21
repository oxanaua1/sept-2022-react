import React from 'react';


const User = ({user, setUserId}) => {

    const {id: userId, name} = user;

    return (
        <div>
            <div>id: {userId}</div>
            <div>name: {name}</div>

            <button onClick={() => setUserId(userId)}>Show User Posts</button>
        </div>
    );
};

export {User};