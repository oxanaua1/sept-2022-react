import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import {authService} from "../../services";
import {useNavigate} from "react-router-dom";


const LoginPage = () => {

    const {register, handleSubmit} = useForm();
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const login = async (userCredential) => {
        try {
            await authService.login(userCredential);
            navigate('/cars')

        } catch (e) {
            //401 - неавторизований
            if (e.response.status === 401) {
                setError(e.response.data)
            }
        }

    };


    return (
        <div>

            <div>
                <form onSubmit={handleSubmit(login)}>
                    <input type="text" placeholder={'username'} {...register('username')}/>
                    <input type="text" placeholder={'password'} {...register('password')}/>
                    <button>login</button>
                </form>
            </div>

            <div>
                { //цей div буде відпрацьовувати тільки, якщо в мене є error
                    error?.detail &&
                    <div>
                        {error.detail}
                    </div>

                }
            </div>

        </div>
    );
};

export {LoginPage};