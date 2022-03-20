import { shallow } from 'enzyme';
import TodoListItem from '../../../components/08-reducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <TodoListItem />', () => {
    const handleDelete = jest.fn();
    const handleToogle = jest.fn();

    const wrapper = shallow(
        <TodoListItem 
            todo={demoTodos[0]}
            index={0}
            handleDelete={handleDelete}
            handleToogle={handleToogle}
        />
    );

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot(); 
    });

    test('debe de llamar la funcion handleDelete', () => {
        // jest.fn()
        // toHaveBeenCalled
        // toHaveBeenCalledWith
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
    });

    test('debe de llamar la funcion handleToogle', () => {
        // jest.fn()
        // toHaveBeenCalledWith
        wrapper.find('p').simulate('click');
        expect(handleToogle).toHaveBeenCalledWith(demoTodos[0].id);
    });

    test('debe de mostrar el texto es correctamente', () => {
        expect(wrapper.find('p').text().trim()).toBe(`1. ${demoTodos[0].desc}`);
    });

    test('debe de tener la clase complete si el TODO.done = true', () => {
        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(
            <TodoListItem 
                todo={todo}
            />
        );

        expect(wrapper.find('p').hasClass('complete')).toBeTruthy();
        expect(wrapper.find('.complete').exists()).toBeTruthy();
    });
});