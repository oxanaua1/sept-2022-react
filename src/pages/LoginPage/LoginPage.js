import React, {useRef} from 'react';
import {useAuthContext} from "../../hooks/useAuthContext";
import {useLocation, useNavigate} from "react-router-dom";


const LoginPage = () => {

    const username = useRef();
    const {logIn} = useAuthContext();
    const navigate = useNavigate();
    const {state} = useLocation();

    const login = () => {
        logIn(username.current.value)
        navigate(state.pathname, {replace: true})
    }

    return (
        <div>
            <input type="text" placeholder={'name'} ref={username}/>
            <button onClick={() => login()}>click</button>
        </div>
    );
};

export {LoginPage};