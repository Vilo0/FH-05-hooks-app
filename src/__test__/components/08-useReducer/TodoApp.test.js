import { act } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import TodoApp from '../../../components/08-reducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <TodoApp />', () => {
    const wrapper = shallow(<TodoApp />);

    Storage.prototype.setItem = jest.fn(() => {});

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de agregar un TODO', () => {
        const wrapper = mount(<TodoApp />);

        act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
        });

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
        // expect(localStorage.setItem).toHaveBeenCalledWith({});
    });

    test('debe de eliminar un todo', () => {
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)');
    });
});