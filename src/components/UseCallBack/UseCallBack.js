import React, {useCallback, useState} from 'react';
import {Todos} from "./Todos";

//useCallBack - дозволяє не перестворювати ф-ю ще раз і відповідно разом з memo ще раз її не перендерювати
//в масиві депенденсі :[], пишеться умови(змінні) за яких я хочу бщоб ф-я перестворювалася

const UseCallBack = () => {
    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState(0);

    const addTodo = useCallback(() => {
        setTodos(prevState => [...prevState, 'NewTodo'])
    }, [])


    return (
        <div>
            <Todos todos={todos} addTodo={addTodo}/>
            <div>count:{count}</div>
            <button onClick={() => setCount(prevState => prevState + 1)}>incCount</button>
        </div>
    );
};

export {UseCallBack};