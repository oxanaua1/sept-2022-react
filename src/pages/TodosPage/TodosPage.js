import React from 'react';
import {Todos} from "../../components";
import {Outlet} from "react-router-dom";
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