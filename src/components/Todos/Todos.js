import React, {useEffect, useState} from 'react';

import {todosService} from "../../services";
import {Todo} from "../Todo/Todo";
import css from './Todos.module.css'

const Todos = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todosService.getAll().then(value => value.data).then(value => setTodos([...value]))
    }, [])


    return (
        <div className={css.TodosWrap}>

            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}

            <button onClick={() => {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
            }}>Up
            </button>

        </div>
    );
};

export {Todos};