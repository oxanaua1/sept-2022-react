import React from 'react';
import {useForm} from "react-hook-form";

const LoginPage = () => {

    const {register, handleSubmit} = useForm();

    const login = async (userCredential) => {

    };

    return (
        <div>
            <form onSubmit={handleSubmit(login)}>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'password'} {...register('password')}/>


            </form>
        </div>
    );
};

export {LoginPage};