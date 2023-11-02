import {renderHook, act} from '@testing-library/react-hooks';

import useForm from '../../hooks/useForm';

describe('Pruebas en useForm.js', () => {

    const initialForm = {
        name: 'Borja',
        email: 'borjagua@ucm.es'
    }
    
    test('Debe devolver un formulario por defecto.', () => {
        const {result} = renderHook(() => useForm(initialForm));
        expect(result.current[0]).toEqual(initialForm);
        expect(typeof result.current[1]).toBe('function');
        expect(typeof result.current[2]).toBe('function');
    })

    test('Debe cambiar el nombre del formulario.', () => {

        const nombre = 'Aday';

        const {result} = renderHook(() => useForm(initialForm));
        const [,handleInputChange] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: nombre
                }
            });
        })

        const [values] = result.current;

        expect(values).toEqual({...initialForm, name: nombre});
    })

    test('Debe reestablecerse los valores del formulario.', () => {
        const nombre = 'Aday';

        const {result} = renderHook(() => useForm(initialForm));
        const [,handleInputChange, reset] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: nombre
                }
            });

            reset();
        })

        const [values] = result.current;

        expect(values).toEqual(initialForm);


    })
    

})
