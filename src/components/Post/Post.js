import React from 'react';
import {useDispatch} from "react-redux";

import {postActions} from "../../redux";

const Post = ({post}) => {

    const {id, title} = post;
    const dispatch = useDispatch();
    return (
        <div>
            <div>{id}. {title}</div>
            <button onClick={() => dispatch(postActions.setSelectedPost(post))}>>show selectedPost No {id}</button>
            <button onClick={() => dispatch(postActions.getById({id}))}>show post details No {id}</button>
        </div>
    );
};

export {Post};