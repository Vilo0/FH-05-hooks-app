import { shallow } from 'enzyme';
import MultipleCustomHooks from '../../../components/03-examples/MultipleCustomHooks';
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {
    beforeEach( () => {
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        })
    });

    test('debe de mostrarse correctamente', () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null,
        });

        const wrapper = shallow(<MultipleCustomHooks/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar la información', () => {
        useFetch.mockReturnValue({
            data: [{
                author: 'Fernando',
                quote: 'Hola'
            }],
            loading: false,
            error: null,
        });
        const wrapper = shallow(<MultipleCustomHooks/>);
        
        expect(wrapper.find('.alert').exists()).not.toBeTruthy();
        expect(wrapper.find('.mb-3').text().trim()).toBe('Hola');
        expect(wrapper.find('footer').text().trim()).toBe('Fernando');
    });
});