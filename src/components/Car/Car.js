import React from 'react';
import {carService} from "../../services";

const Car = ({car, setUpdateCars, setCars}) => {

    const {id, brand, price, year} = car;

    const deleteCar = () => {
        carService.deleteById(id).then(async () => {
            const {data} = await carService.getAll();
            setCars([...data])
        }).catch(err => console.log(err))
    }

    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>

            <button onClick={() => setUpdateCars(car)}>update</button>

            <button onClick={() => deleteCar()}>delete</button>

            <hr/>
        </div>
    );
};

export {Car};