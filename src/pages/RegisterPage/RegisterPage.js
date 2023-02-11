import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useNavigate} from "react-router-dom";

import {userRegisterValidator} from "../../validators";
import {userService} from "../../services";


const RegisterPage = () => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "all", resolver: joiResolver(userRegisterValidator)
    });
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const registerUser = async (user) => {
        try {
            await userService.create(user)
            navigate('/login')
        } catch (e) {
            setError(e.response.data)
        }
    };


    return (
        <div>
            <div>

                <form onSubmit={handleSubmit(registerUser)}>
                    <input type="text" placeholder={'username'} {...register('username')}/>

                    <input type="text" placeholder={'password'} {...register('password')}/>

                    <button>register</button>
                </form>
            </div>
            <div>  {errors.username && <span>{errors.username.message}</span>}
                {errors.password && <span>{errors.password.message}</span>}
            </div>
            <div>  {error &&
                <div>{JSON.stringify(error)}</div>}
            </div>
        </div>
    );
};

export {RegisterPage};