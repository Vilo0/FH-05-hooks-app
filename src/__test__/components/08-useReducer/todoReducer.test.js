import { todoReducer } from '../../../components/08-reducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en todoReducer', () => {
    test('debe de retornar el estado por defecto', () => {
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    });

    test('debe de agregar un todo', () => {
        const newTodo = {
            id: 3,
            desc: 'Aprender Inglés',
            done: false,
        }

        const state = todoReducer(demoTodos, { type: 'add', payload: newTodo });
        
        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, newTodo]);
    });

    test('debe de borrar un TODO', () => {
        // action.payload = ID del todo
        const state = todoReducer(demoTodos, { type: 'delete', payload: 2 });
        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[0]]);
    });

    test('debe de hacer el toogle del TODO', () => {
        // action.payload = ID del todo
        const state = todoReducer(demoTodos, { type: 'toogle', payload: 2 });
        
        expect(state.filter((todo) => todo.id === 2)[0].done).toBeTruthy();
        expect(state[0]).toEqual(demoTodos[0]);
    });
});
