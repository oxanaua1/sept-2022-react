import React, {useEffect, useState} from 'react';
import {launchService} from "../../services";
import {Launch} from "../Launch/Launch";

const Launches = () => {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        launchService.getAll().then(value => value.data).then(value => setLaunches([...value]))

    }, [])

    return (
        <div>
            {launches.filter(value => value.launch_year !== '2020')
                .map(value => <Launch key={value.flight_number} launch={value}/>)}
        </div>
    );
};

export {Launches};