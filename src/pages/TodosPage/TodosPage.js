import React from 'react';
import {Outlet} from "react-router-dom";

import {Todos} from "../../components";
import css from './TodosPage.module.css'

const TodosPage = () => {
    return (
        <div className={css.TodosPageWrap}>
            <Todos/>
            <Outlet/>
        </div>
    );
};

export {TodosPage};