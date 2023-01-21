import React from 'react';


const User = ({user, onShowUserDetails}) => {

    const {id: userId, name} = user;


    return (
        <div>
            <div>id: {userId}</div>
            <div>name: {name}</div>

            <button onClick={() => onShowUserDetails(userId)}>Show User Details</button>


        </div>
    );
};

export {User};