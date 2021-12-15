import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';

import './styles.css';
import TodoList from './TodoList';

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

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    console.log(description);

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

    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length <= 1)
            return;

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        }

        const action = {
            type: 'add',
            payload: newTodo,
        };

        dispatch(action);
        reset();
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
                    <h4>Agregar Todo</h4>
                    <hr />
                    
                    <form onSubmit={ handleSubmit }>
                        
                        <input 
                            type="text" 
                            name="description"
                            placeholder="Aprender ..."
                            autoComplete="false"
                            className="form-control"
                            onChange={ handleInputChange }
                            value={ description }
                        />

                        <button
                            type="submit" 
                            className="btn btn-outline-primary mt-2 btn-block"
                        >
                            Agregar
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default TodoApp
