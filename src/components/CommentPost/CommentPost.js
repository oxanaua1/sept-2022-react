import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

import {postsService} from "../../services";
import css from './CommentPost.module.css'

const CommentPost = () => {

    const {postId} = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);

    useEffect(() => {

        postsService.getByPostId(postId).then(({data}) => {
            setPost(data)
        })

    }, [postId]);


    return (
        <div className={css.CommentPostWrap}>
            {post &&
                <div className={css.CommentPostView}>
                    <h4>POST N {post.id}</h4>
                    <h4>userId: {post.userId}</h4>
                    <div>title: {post.title}</div>
                    <div>body: {post.body}</div>

                    <button onClick={() => {
                        navigate(-1)
                    }}>Hide Post
                    </button>
                </div>
            }

        </div>
    );
};

export {CommentPost};