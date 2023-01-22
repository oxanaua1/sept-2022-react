import React from 'react';

const Launch = ({launch}) => {

    const {flight_number, mission_name, launch_year, links: {mission_patch_small}} = launch;

    return (
        <div>
            <div> {flight_number}. Mission Name: {mission_name}</div>
            <div>Launch Year:{launch_year}</div>
            <img src={mission_patch_small} alt="mission_name"/>
        </div>
    );
};

export {Launch};