import React from 'react';
import {Link} from "react-router-dom";
import css from './Comment.module.css'

const Comment = ({comment}) => {
    const {postId, id, name, email} = comment;


    return (
        <div className={css.CommentWrap}>
            <div>postId:{postId}--id:{id}--email:{email}</div>
            <div>name: {name}</div>

            <button>
                <Link to={postId.toString()}>Show Post </Link>
            </button>


        </div>
    );
};

export {Comment};