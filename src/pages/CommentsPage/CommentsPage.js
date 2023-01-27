import React from 'react';
import {Comments} from "../../components";
import {Outlet} from "react-router-dom";
import css from './CommentsPage.module.css'

const CommentsPage = () => {
    return (
        <div>

            <div className={css.CommentPageWrap}>
                <Comments/>
                <div className={css.CommentPageOutlet}><Outlet/></div>
            </div>

        </div>
    );
};

export {CommentsPage};