import React from 'react';
import useCounter from '../../hooks/useCounter.js';

import './counter.css';

const CounterWithCustomHook = () => {

    const {counter: counter1, increment: incrementCounter1, decrement: decrementCounter1, reset: resetCounter1} = useCounter();
    const {counter: counter2, increment: incrementCounter2, decrement: decrementCounter2, reset: resetCounter2} = useCounter();

    return (
        <>
            <h1>Counter with Hook: {counter1}</h1>
            <hr></hr>

            <button onClick = {incrementCounter1} className = 'btn btn-primary me-2'>+ 1</button>
            <button onClick = {resetCounter1} className = 'btn btn-primary me-2'>Reset</button>
            <button onClick = {decrementCounter1} className = 'btn btn-primary'>- 1</button>

            <h1>Counter with Hook: {counter2}</h1>
            <hr></hr>

            <button onClick = {incrementCounter2} className = 'btn btn-primary me-2'>+ 1</button>
            <button onClick = {resetCounter2} className = 'btn btn-primary me-2'>Reset</button>
            <button onClick = {decrementCounter2} className = 'btn btn-primary'>- 1</button>
        </>
    )
}

export default CounterWithCustomHook;