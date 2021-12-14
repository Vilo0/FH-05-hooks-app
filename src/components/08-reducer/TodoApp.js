import { useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './styles.css';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false,
}];

const TodoApp = () => {

    const [todos] = useReducer(todoReducer, initialState);

    return (
        <div>
            <h1>TodoApp</h1>
            <hr />

            <ul>
                <li>Hola</li>
                <li>Mundo</li>
                <li>Hola Mundo</li>
            </ul>
        </div>
    )
}

export default TodoApp
