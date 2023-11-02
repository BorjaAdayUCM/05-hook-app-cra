import React, {useState, useCallback, useEffect} from 'react'

import ShowIncrement from './ShowIncrement';

import './memorize.css';

const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    const increment = useCallback( (num) => {
        setCounter(c => c + num);
    }, [setCounter]);

    useEffect(() => {
        // ????
        // Cuando un useEffect tiene como dependencia una función es útil utilizar el useCallback.
    }, [increment])

    return (
        <div>
            <h1>useCallback Hook:  {counter}</h1>
            <hr />

            <ShowIncrement increment = {increment} />
        </div>
    )
}

export default CallbackHook;