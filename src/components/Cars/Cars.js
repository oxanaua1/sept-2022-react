import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Car} from "../Car/Car";
import {carActions} from "../../redux";

const Cars = () => {

    const {cars} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [dispatch])


    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}

        </div>
    );
};

export {Cars};