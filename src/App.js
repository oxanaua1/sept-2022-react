import './App.css';
import {CarForm, Cars} from "./components";
import {useEffect, useState} from "react";

import {carService} from "./services";

const App = () => {

    const [cars, setCars] = useState([]);
    const [updateCars, setUpdateCars] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars([...data]))
    }, [])

    return (
        <div className="App">

            <CarForm setCars={setCars} updateCars={updateCars}/>
            <hr/>
            <Cars cars={cars} setUpdateCars={setUpdateCars} setCars={setCars}/>

        </div>
    );
}

export default App;
