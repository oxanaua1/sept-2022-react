import React, {useEffect, useState} from 'react';

import {commentsService} from "../../services";
import {Comment} from "../Comment/Comment";
import css from './Comments.module.css'

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments([...data]))
    }, [])


    return (
        <div className={css.CommentsWrap}>

            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}

        </div>
    );
};

export {Comments};