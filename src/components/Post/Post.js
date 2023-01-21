import React from 'react';

const Post = ({post}) => {

    const {id: postId, userId, title} = post;


    return (
        <div>
            <div>postId:{postId}</div>
            <div>userId:{userId}</div>
            <div>title: {title}</div>

        </div>
    );
};

export {Post};