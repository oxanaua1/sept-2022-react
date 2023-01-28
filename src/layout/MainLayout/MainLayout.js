import React from 'react';
import {Outlet} from "react-router-dom";

import {Header, Footer} from "../../components";
import css from './MainLayout.module.css'


const MainLayout = () => {
    return (
        <div>

            <div className={css.LayoutWrap}>
                <div className={css.HeaderWrap}><Header/></div>
                <div className={css.OutletWrap}><Outlet/></div>
                <div className={css.FooterWrap}><Footer/></div>
            </div>

        </div>
    );
};

export {MainLayout};