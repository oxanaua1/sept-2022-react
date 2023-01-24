import React from 'react';
import {useForm} from "react-hook-form";


const CarForm = () => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue,} = useForm({mode: 'all'});


    const submit = (data) => {
        console.log(data); // info we got from form inputs
    }

    return (

        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'brand'} {...register('brand', {
                pattern: {
                    value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                    message: 'Тільки букви, цифри, від 1 до 20 символів'
                }
            })}/>
            {errors.brand && <span>{errors.brand.message}</span>}

            <input type="text" placeholder={'price'} {...register('price',
                {
                    valueAsNumber: true,
                    min: {value: 0, message: 'Мінімум 0'},
                    max: {value: 1000000, message: 'Максимум 1000000'}
                })}/>
            {errors.price && <span>{errors.price.message}</span>}

            <input type="text" placeholder={'year'} {...register('year',
                {
                    valueAsNumber: true,
                    min: {value: 1990, message: 'Мін 1990'},
                    max: {value: new Date().getFullYear(), message: `Max ${new Date().getFullYear()}`}
                })}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button>Save</button>
        </form>
    );
};

export {CarForm};

//register - to connect inputs to Form hook
//handleSubmit - to create submit in order to create obj after validation
//reset - to reset form
//formState:{errors, isValid} - to have errors and to find out if the form is or isn't valid
//setValue - to set/change some values to our inputs
//useForm({mode:'all'}) - props: mode, to point what kind of props our error Obj is going to fill in
