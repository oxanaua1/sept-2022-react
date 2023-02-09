import React from 'react';
import {useSelector} from "react-redux";

const Cars = () => {

    const {cars} = useSelector(state => state.cars);
console.log(cars);

    return (
        <div>
            {JSON.stringify(cars)}

        </div>
    );
};

export {Cars};