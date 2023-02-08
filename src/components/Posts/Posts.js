import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {postActions} from "../../redux";
import {Post} from "../Post/Post";


const Posts = () => {
    const dispatch = useDispatch();
    const {posts} = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(postActions.getAll())
    }, [])

    return (
        <div style={{width:'500px', border: '1px solid black' }}>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};