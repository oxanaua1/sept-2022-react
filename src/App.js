import './App.css';

import {CarForm, Cars} from "./components";

const App = () => {
    return (
        <div className="App">
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
}

export default App;
