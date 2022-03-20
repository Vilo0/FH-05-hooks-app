import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Edgard',
        email: 'thevilos@gmail.com'
    };

    test('debe de regresar un formulario por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [values, handleChange, reset] = result.current;

        expect(values).toEqual(initialForm);
        expect(typeof handleChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('debe de cambiar el valor del formulario (cambiar name)', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleChange] = result.current;
        const target = {
            name: 'name',
            value: 'Alejandro'
        };

        act(() => {
            handleChange({target});
        });
        const [values] = result.current;

        expect(values).toEqual({ ...initialForm, name: 'Alejandro' });
    });

    test('debe de re-establecer el formularo con RESET', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleChange, reset] = result.current;
        const target = {
            name: 'email',
            value: 'otrovilo@gmail.com'
        };

        act(() => {
            handleChange({target});
            reset()
        });
        const [values] = result.current;
        expect(values).toEqual({ ...initialForm });
    });
});