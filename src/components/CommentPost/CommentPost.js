import React, {useEffect, useState} from 'react';
import {postsService} from "../../services";
import {useParams} from "react-router-dom";
import css from './CommentPost.module.css'

const CommentPost = () => {
    const {postId} = useParams();
    const [post, setPost] = useState(null);


    useEffect(() => {

        postsService.getByPostId(postId).then(({data}) => {
            setPost(data)
        })

    }, [postId])
    return (
        <div className={css.CommentPostWrap}>
            {post &&
                <div>
                    <div>id: {post.id}</div>
                    <div>userId: {post.userId}</div>
                    <div>title: {post.title}</div>
                    <div>body: {post.body}</div>

                    <button onClick={() => {
                        setPost(null)
                    }}>hide post
                    </button>
                </div>
            }

        </div>
    );
};

export {CommentPost};