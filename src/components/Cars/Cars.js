import React from 'react';

import {Car} from "../Car/Car";

const Cars = ({cars, setUpdateCars, setCars}) => {


    return (

        <div>
            {cars.map(car => <Car key={car.id} car={car} setUpdateCars={setUpdateCars} setCars={setCars}/>)}
        </div>

    );
};

export {Cars};