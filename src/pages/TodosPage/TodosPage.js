import React, {useContext} from 'react';
import {Outlet} from "react-router-dom";

import {Todos} from "../../components";
import css from './TodosPage.module.css'
import {MyContext} from "../../index";

const TodosPage = () => {
    const context = useContext(MyContext);
    context.gende = 'male';
    Object.assign(context, {status: true});
    delete context.name;

    return (
        <div>

            <div className={css.TodosPageWrap}>
                {JSON.stringify(context)}

                <Todos/>
                <Outlet/>
            </div>
        </div>
    );
};

export {TodosPage};