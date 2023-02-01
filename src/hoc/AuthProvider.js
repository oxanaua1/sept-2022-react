import React, {useState} from 'react';
import {createContext} from "react";
//hoc-high order component

const AuthContext = createContext(null);


const AuthProvider = ({children}) => {

//відповідає за те чи є залогінений юзер чи ні
    const [user, setUser] = useState(null);

//ф-я логін приймає залогіненого юзера, яка буд сетити залогіненого юзера в стейт:
    const logIn = (loginUser) => {
        setUser(loginUser);
    }

//ф-я логаут буде сетати в юзера нал
    const logOut = () => {
        setUser(null);
    }

//строрюємо obj value

    const value = {user, logIn, logOut}

    return (

        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>

    );
    //після обгорки в index.js
    //     <<AuthProvider>
    //     <BrowserRouter>
    //         <App/>
    //     </BrowserRouter>
    //     </AuthProvider>-->>> це все є children AuthProvider і ці чілдени попали в наш контекст
};

export {AuthProvider, AuthContext};