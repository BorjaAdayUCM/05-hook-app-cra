import React, {useState} from 'react'

import AppRouter from './AppRouter.js';
import UserContext from './UserContext.js';

const MainApp = () => {

    const [user, setUser] = useState({});

    return (
        <div>
            <UserContext.Provider value = {{
                user,
                setUser
            }}>
                <AppRouter />
            </UserContext.Provider>
        </div>
    )
}

export default MainApp;
