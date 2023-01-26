import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../validator";
import {carService} from "../../services";


const CarForm = ({setCars, updateCars}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue,} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)    //to connect validator to the form: resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (updateCars) {
            setValue('brand', updateCars.brand)
            setValue('price', updateCars.price)
            setValue('year', updateCars.year)
        }
    }, [updateCars])


    const submit = async (car) => {
        const {data} = await carService.create(car)
        console.log(data);                      // info we've got from form inputs
        setCars(prev => [...prev, data])       //set new data into previous array of cars
        reset();

    }
    const update = async (car) => {
        const {data} = await carService.updateById(updateCars.id, car);
        if (Object.keys(data).length) {     //to verify if data that is type of Object contains keys and is not empty
            const {data} = await carService.getAll()
            setCars(data);
        }
        reset();
    }

    return (
                                               //choose one fn (update or create)
        <form onSubmit={handleSubmit(updateCars ? update : submit)}>

            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}

            <input type="text" placeholder={'price'} {...register('price')}/>
            {errors.price && <span>{errors.price.message}</span>}

            <input type="text" placeholder={'year'} {...register('year')}/>
            {errors.year && <span>{errors.year.message}</span>}


            <button disabled={!isValid}>{updateCars ? 'Update' : 'Create'}</button>
        </form>
                                                  //choose one btn (update or create)
    );

};

export {CarForm};

//register - to connect inputs to Form hook
//handleSubmit - to create submit in order to create obj after validation
//reset - to reset form
//formState:{errors, isValid} - to have errors and to find out if the form is or isn't valid
//setValue - to set/change some values to our inputs
//useForm({mode:'all'}) - props: mode, to point what kind of props our error Obj is going to fill in
