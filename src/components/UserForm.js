import React, {useRef} from 'react';
import {ACTION_TYPES} from "./userTypes";


const UserForm = ({users, dispatch}) => {
    const nameInp = useRef();
    const ageInp = useRef();


    const createUser = () => {
        dispatch({type: ACTION_TYPES.ADD_USER, payload: nameInp.current.value})


    };

    return (
        <div>
            <form>
                <input type="text" name={'name'} ref={nameInp}/>
                <input type="text" age={'age'} ref={ageInp}/>
                <button onClick={createUser}>ok</button>

            </form>
        </div>
    );
};

export {UserForm};