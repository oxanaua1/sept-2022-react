import React, {memo} from 'react';

//memo - ф-я, яка допомагає не рендерити компонентуTodos ще раз, якщо не змінюються її пропси {addTodo, todos}
//тоді компонента Todos стає колбеком ф-ї memo

const Todos = memo(({addTodo, todos}) => {
    console.log('Todo');
    return (
        <div>
            {todos.map((todo, index) => <div key={index}>{todo}</div>)}
            <button onClick={addTodo}>add todo</button>
        </div>
    );
});

export {Todos};