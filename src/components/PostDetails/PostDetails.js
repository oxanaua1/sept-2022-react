import React from 'react';
import {useSelector} from "react-redux";

const PostDetails = () => {

    const {postById} = useSelector(state => state.posts);

    return (
        <div>
            {postById &&

                <div style={{width: '200px'}}>
                    <h3>{postById.id} {postById.title}</h3>
                    <p>{postById.body}</p>
                </div>
            }
        </div>
    );
};

export {PostDetails};