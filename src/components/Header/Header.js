import React from 'react';
import {useSelector} from "react-redux";


const Header = () => {
    const {selectedUser} = useSelector(state => state.users);
    const {selectedPost} = useSelector(state => state.posts);


    return (
        <div>

            {selectedUser &&
                <div>
                    {selectedUser.id} {selectedUser.name} {selectedUser.username} {selectedUser.email}
                </div>}
            <hr/>

            {selectedPost &&
                <div>
                    {selectedPost.id} {selectedPost.title}
                </div>}
            <hr/>

        </div>
    );
};

export {Header};