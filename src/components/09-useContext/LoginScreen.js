import React, {useContext} from 'react'
import UserContext from './UserContext';

const LoginScreen = () => {

    // 1. Obtener la referencia al UserContext.
    // 2. setUser
    const {setUser} = useContext(UserContext);

    


    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <button
                className = 'btn btn-primary'
                onClick = {() => setUser({
                    id: 1234,
                    name: 'BorjaAday',
                    email: 'borjagua@ucm.es'
                })}
            >
                Login
            </button>
        </div>
    )
}

export default LoginScreen;
