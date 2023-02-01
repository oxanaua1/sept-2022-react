import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'
import {useAuthContext} from "../../hooks/useAuthContext";

const Header = () => {
    const {user, logOut} = useAuthContext();

    return (
        <div className={css.Header}>

            <NavLink to={''}>Home</NavLink>
            <NavLink to={'todos'}>Todos</NavLink>
            <NavLink to={'albums'}>Albums</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
            {user &&
                <div style={{color: 'white'}}>
                    {user}
                    <button onClick={() => logOut()}> log out</button>
                </div>}

        </div>
    );
};

export {Header};