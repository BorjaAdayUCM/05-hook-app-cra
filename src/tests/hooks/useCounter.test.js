import {renderHook, act} from '@testing-library/react-hooks';

import useCounter from '../../hooks/useCounter.js'


describe('Pruebas en useCounter.js', () => {

    const valor = 0;
    
    test('Debe devolver el valor por defecto.', () => {
        const {result} = renderHook(() => useCounter());
        expect(result.current.counter).toBe(1);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    })

    test('Debe devolver el valor indicado por argumentos.', () => {
        const {result} = renderHook(() => useCounter(valor));
        expect(result.current.counter).toBe(valor);
    })
    
    test('Debe incrementar el valor en 1.', () => {
        const {result} = renderHook(() => useCounter(valor));
        const {increment} = result.current;

        act(() => {
            increment();
        });

        const {counter} = result.current;

        expect(counter).toBe(valor + 1);
    })

    test('Debe decrementar el valor en 1.', () => {
        const {result} = renderHook(() => useCounter(valor));
        const {decrement} = result.current;

        act(() => {
            decrement();
        });

        const {counter} = result.current;

        expect(counter).toBe(valor - 1);
    })

    test('Debe resetear el valor.', () => {
        const {result} = renderHook(() => useCounter(valor));
        const {increment, reset} = result.current;

        act(() => {
            increment();
            reset();
        });

        const {counter} = result.current;

        expect(counter).toBe(valor);
    })
    

})
