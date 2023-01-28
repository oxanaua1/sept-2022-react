import React from 'react';
import {Outlet} from "react-router-dom";

import {Comments} from "../../components";
import css from './CommentsPage.module.css'

const CommentsPage = () => {

    return (
        <div>

            <div className={css.CommentPageWrap}>
                <div className={css.CommentPageList}>
                    <Comments/>
                </div>
                <div className={css.CommentPageOutlet}>
                    <Outlet/>
                </div>
            </div>

        </div>
    );
};

export {CommentsPage};