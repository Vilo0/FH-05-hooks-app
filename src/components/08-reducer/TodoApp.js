import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

import './styles.css';

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];

    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false,
    // }];
};


const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleDelete = (todoId) => {
        console.log(todoId);
        const action = {
            type: 'delete',
            payload: todoId,
        };
        dispatch(action);
    }

    const handleToogle = (todoId) => {
        dispatch({
            type: 'toogle',
            payload: todoId,
        })
    }

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo,
        });
    } 

    return (
        <div>
            <h1>TodoApp ({ todos.length })</h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    <TodoList  
                        todos={ todos }
                        handleDelete={ handleDelete }
                        handleToogle={ handleToogle }
                    />
                </div>
                
                <div className="col-5">
                    
                    <TodoAdd 
                        handleAddTodo={ handleAddTodo }
                    />

                </div>
            </div>
        </div>
    )
}

export default TodoApp
