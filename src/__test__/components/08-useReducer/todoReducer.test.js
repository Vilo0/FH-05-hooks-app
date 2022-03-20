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
    })
});
