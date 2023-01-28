import React from 'react';
import {Outlet} from "react-router-dom";

import {Albums} from "../../components";
import css from './AlbumPage.module.css'


const AlbumsPage = () => {

    return (
        <div className={css.AlbumPageWrap}>
            <Albums/>
            <Outlet/>
        </div>
    );
};

export {AlbumsPage};